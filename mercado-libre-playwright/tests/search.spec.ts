import { test, expect } from '@playwright/test';

test('search results page loads correctly on Mercado Libre', async ({ page }) => {
  test.skip(!!process.env.CI, 'Mercado Libre blocks GitHub Actions datacenter IPs.');

  await page.goto('https://listado.mercadolibre.com.ar/heladera-no-frost');
  await page.waitForLoadState('domcontentloaded');

  await expect(page).toHaveURL(/heladera-no-frost|listado/i);

  const resultItems = page.locator('ol.ui-search-layout > li');
  await expect(resultItems.first()).toBeVisible({ timeout: 10000 });
});