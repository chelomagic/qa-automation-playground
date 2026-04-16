import { test, expect } from '@playwright/test';

test('apply a filter and keep seeing results', async ({ page }) => {
  test.skip(!!process.env.CI, 'Mercado Libre blocks GitHub Actions datacenter IPs.');

  await page.goto('https://listado.mercadolibre.com.ar/heladera-no-frost');
  await page.waitForLoadState('domcontentloaded');

  const resultItemsBefore = page.locator('ol.ui-search-layout > li');
  await expect(resultItemsBefore.first()).toBeVisible({ timeout: 10000 });

  const currentUrl = page.url();

  const filterOption = page
    .locator('a[href*="shipping"], a[href*="condition"], a[href*="price"], a[href*="deal"]')
    .first();

  await expect(filterOption).toBeVisible({ timeout: 10000 });
  await filterOption.click();

  await page.waitForLoadState('domcontentloaded');
  await expect(page).not.toHaveURL(currentUrl);

  const resultItemsAfter = page.locator('ol.ui-search-layout > li');
  await expect(resultItemsAfter.first()).toBeVisible({ timeout: 10000 });
});