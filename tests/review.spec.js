import { test } from '@playwright/test'
import { mkdir } from 'fs/promises'
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

const viewports = [
  { width: 390, height: 844, name: 'mobile' },
  { width: 1280, height: 800, name: 'desktop' },
]

test.describe('visual review pack', () => {
  for (const vp of viewports) {
    test.describe(vp.name, () => {
      test.use({ viewport: { width: vp.width, height: vp.height } })

      for (const route of routes) {
        test(`capture ${route}`, async ({ page, baseURL }) => {
          const outDir = path.join('test-results', 'review-pack', vp.name)
          await mkdir(outDir, { recursive: true })

          await page.emulateMedia({ reducedMotion: 'reduce' })
          await page.goto(route, { waitUntil: 'networkidle' })

          const accept = page.getByRole('button', { name: /accept all/i })
          if (await accept.isVisible().catch(() => false)) await accept.click()

          // Scroll to bottom to trigger lazy loads
          await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
          await page.waitForLoadState('networkidle')
          await page.waitForTimeout(300)

          const slug = route === '/' ? 'home' : route.slice(1).replace(/\//g, '_')
          const outPath = path.join(outDir, `${slug}.png`)
          await page.screenshot({ path: outPath, fullPage: true })
        })
      }
    })
  }
})


