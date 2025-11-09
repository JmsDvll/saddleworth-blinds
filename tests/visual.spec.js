import { test, expect } from '@playwright/test'

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

for (const viewport of [
  { width: 390, height: 844, name: 'mobile' },
  { width: 768, height: 1024, name: 'tablet' },
  { width: 1280, height: 800, name: 'desktop' },
]) {
  test.describe(`visual @${viewport.name}`, () => {
    test.use({ viewport })

    for (const route of routes) {
      test(`snapshot ${route}`, async ({ page }) => {
        await page.emulateMedia({ reducedMotion: 'reduce' })
        await page.goto(route, { waitUntil: 'networkidle' })
        // Dismiss cookie banner if present to unblock UI
        const accept = page.getByRole('button', { name: /accept all/i })
        if (await accept.isVisible().catch(() => false)) await accept.click()
        // Small settle time for layout after banner dismissal
        await page.waitForTimeout(200)
        const slug = route === '/' ? 'home' : route.slice(1).replace(/\//g, '_')
        await expect(page).toHaveScreenshot(`${viewport.name}_${slug}.png`, { fullPage: false, timeout: 15000 })
      })
    }
  })
}


