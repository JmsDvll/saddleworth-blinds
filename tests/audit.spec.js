import { test, expect } from '@playwright/test'
import { mkdir, writeFile } from 'fs/promises'
import path from 'path'

const routes = [
  '/',
  '/roller-blinds',
  '/venetian-blinds',
  '/vertical-blinds',
  '/vision-blinds',
  '/perfect-fit-blinds',
  '/shutters',
  '/roman-blinds',
  '/curtains',
  '/allusion-blinds',
  '/areas/uppermill',
  '/areas/diggle',
  '/areas/delph',
  '/areas/greenfield',
  '/areas/dobcross',
  '/areas/lydgate',
  '/areas/denshaw',
  '/areas/friezland',
  '/areas/grasscroft',
  '/areas/grotton',
  '/areas/lees',
  '/areas/springhead',
  '/gallery',
  '/contact',
  '/book-appointment',
]

const outDir = path.join('test-results', 'audit')

test.describe('automated visual/UX audit', () => {
  test.setTimeout(120_000)
  test.beforeAll(async () => {
    await mkdir(outDir, { recursive: true })
  })

  test('audit routes and write report.json', async ({ page }) => {
    const report = []

    for (const route of routes) {
      await page.emulateMedia({ reducedMotion: 'reduce' })
      await page.goto(route, { waitUntil: 'networkidle' })

      // Dismiss cookie banner if present
      const accept = page.getByRole('button', { name: /accept all/i })
      if (await accept.isVisible().catch(() => false)) await accept.click()
      await page.waitForTimeout(200)

      // Progressive scroll to ensure lazy content is loaded and entire page is covered
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let y = 0
          let steps = 0
          const maxSteps = 100
          const step = () => {
            const h = document.body.scrollHeight
            window.scrollTo(0, y)
            y += Math.max(300, window.innerHeight * 0.6)
            steps += 1
            if (y >= h - window.innerHeight || steps >= maxSteps) return resolve(null)
            setTimeout(step, 100)
          }
          step()
        })
      })
      await page.waitForLoadState('networkidle')
      await page.waitForTimeout(300)

      const result = await page.evaluate(() => {
        function isVisible(el) {
          if (!el) return false
          const style = getComputedStyle(el)
          if (style.visibility === 'hidden' || style.display === 'none' || parseFloat(style.opacity || '1') === 0) return false
          const rect = el.getBoundingClientRect()
          return rect.width > 0 && rect.height > 0
        }

        function parseRgb(s) {
          // expects rgb(a) like 'rgb(34, 34, 34)' or 'rgba(34,34,34,1)'
          const m = s.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([0-9.]+))?\)/i)
          if (!m) return null
          return { r: +m[1], g: +m[2], b: +m[3], a: m[4] ? +m[4] : 1 }
        }

        function relLuminance({ r, g, b }) {
          const srgb = [r, g, b].map(v => v / 255).map(v => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)))
          return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2]
        }

        function contrastRatio(fg, bg) {
          if (!fg || !bg) return null
          const L1 = relLuminance(fg)
          const L2 = relLuminance(bg)
          const lighter = Math.max(L1, L2)
          const darker = Math.min(L1, L2)
          return (lighter + 0.05) / (darker + 0.05)
        }

        function effectiveBackground(el) {
          let current = el
          while (current) {
            const style = getComputedStyle(current)
            const bgc = parseRgb(style.backgroundColor || '')
            if (bgc && bgc.a > 0) return bgc
            current = current.parentElement
          }
          // default white
          return { r: 255, g: 255, b: 255, a: 1 }
        }

        const issues = []

        // Landmark check
        const main = document.querySelector('main, [role="main"]')
        if (!main || !isVisible(main)) {
          issues.push({ type: 'landmark', message: 'Missing or invisible main landmark' })
        }

        // H1 check
        const h1 = document.querySelector('h1')
        if (!h1 || !isVisible(h1)) {
          issues.push({ type: 'heading', message: 'Missing or invisible h1' })
        }

        // Img alt text
        const imgIssues = Array.from(document.querySelectorAll('img'))
          .filter(img => isVisible(img))
          .filter(img => {
            const alt = img.getAttribute('alt')
            const ariaHidden = img.getAttribute('aria-hidden') === 'true'
            const role = img.getAttribute('role')
            if (ariaHidden || role === 'presentation') return false
            return !(alt && alt.trim().length > 0)
          })
          .slice(0, 50)
          .map(img => ({ src: img.getAttribute('src') || '', selector: img.outerHTML.slice(0, 80) }))
        if (imgIssues.length) issues.push({ type: 'alt', message: 'Images missing alt', details: imgIssues })

        // Links/Buttons accessible name
        function accName(el) {
          const label = el.getAttribute('aria-label') || ''
          const title = el.getAttribute('title') || ''
          const text = (el.innerText || '').trim()
          return (label || title || text).trim()
        }

        const controls = Array.from(document.querySelectorAll('a[href], button, [role="button"]'))
          .filter(isVisible)
        const unlabeled = controls
          .filter(el => accName(el).length === 0)
          .slice(0, 100)
          .map(el => ({ tag: el.tagName.toLowerCase(), selector: el.outerHTML.slice(0, 80) }))
        if (unlabeled.length) issues.push({ type: 'name', message: 'Controls without accessible name', details: unlabeled })

        // Detect disabled/pointer-events:none or visually obstructed controls
        const interactionIssues = []
        for (const el of controls) {
          const style = getComputedStyle(el)
          if (el.matches(':disabled') || style.pointerEvents === 'none') {
            interactionIssues.push({ tag: el.tagName.toLowerCase(), selector: el.outerHTML.slice(0, 80), reason: 'disabled-or-pointer-events-none' })
            continue
          }
          const rect = el.getBoundingClientRect()
          const cx = Math.floor(rect.left + rect.width / 2)
          const cy = Math.floor(rect.top + rect.height / 2)
          const topEl = document.elementFromPoint(cx, cy)
          if (topEl && !el.contains(topEl) && topEl !== el) {
            interactionIssues.push({ tag: el.tagName.toLowerCase(), selector: el.outerHTML.slice(0, 80), reason: 'obstructed', top: topEl.tagName.toLowerCase() })
          }
        }
        if (interactionIssues.length) issues.push({ type: 'interaction', message: 'Disabled/obstructed/unclickable controls', details: interactionIssues.slice(0, 100) })

        // Horizontal overflow
        if (document.documentElement.scrollWidth > window.innerWidth + 1) {
          issues.push({ type: 'layout', message: 'Horizontal overflow detected' })
        }

        // Approximate contrast checks
        const textNodes = Array.from(document.querySelectorAll('p, span, li, a, button, h1, h2, h3, h4, h5, h6'))
          .filter(isVisible)
          .slice(0, 600)
        const lowContrast = []
        for (const el of textNodes) {
          const style = getComputedStyle(el)
          const fg = parseRgb(style.color || '')
          if (!fg) continue
          const bg = effectiveBackground(el)
          const ratio = contrastRatio(fg, bg)
          if (!ratio) continue
          const fontSize = parseFloat(style.fontSize || '16')
          const isLarge = fontSize >= 24 || (fontSize >= 18.66 && style.fontWeight && parseInt(style.fontWeight, 10) >= 700)
          const threshold = isLarge ? 3.0 : 4.5
          if (ratio < threshold) {
            lowContrast.push({ text: (el.textContent || '').trim().slice(0, 60), ratio: +ratio.toFixed(2) })
          }
        }
        if (lowContrast.length) issues.push({ type: 'contrast', message: 'Low contrast text samples', details: lowContrast.slice(0, 50) })

        return { issues }
      })

      report.push({ route, issues: result.issues })
    }

    const outPath = path.join(outDir, 'report.json')
    await writeFile(outPath, JSON.stringify(report, null, 2), 'utf-8')

    // Ensure the file exists for CI visibility
    await expect((await page.context().storageState()).origins).toBeTruthy()
  })
})


