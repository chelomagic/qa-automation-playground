import { test, expect } from '@playwright/test';

test('search results page loads correctly on Mercado Libre', async ({ page }) => {
  await page.goto('https://listado.mercadolibre.com.ar/heladera-no-frost');
  await page.waitForLoadState('domcontentloaded');

  await expect(page).toHaveURL(/heladera-no-frost|listado/i);

  const results = page.locator('a[href*="/p/"], a[href*="MLA-"]');
  await expect(results.first()).toBeVisible();
});