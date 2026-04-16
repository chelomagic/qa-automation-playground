import { test, expect } from '@playwright/test';

test('apply a filter and keep seeing results', async ({ page }) => {
  await page.goto('https://listado.mercadolibre.com.ar/heladera-no-frost');
  await page.waitForLoadState('domcontentloaded');

  const resultsBefore = page.locator('a[href*="/p/"], a[href*="MLA-"]');
  await expect(resultsBefore.first()).toBeVisible();

  const currentUrl = page.url();

  const filterOption = page
    .locator('a[href*="shipping"], a[href*="condition"], a[href*="price"], a[href*="deal"]')
    .first();

  await expect(filterOption).toBeVisible();
  await filterOption.click();

  await page.waitForLoadState('domcontentloaded');
  await expect(page).not.toHaveURL(currentUrl);

  const resultsAfter = page.locator('a[href*="/p/"], a[href*="MLA-"]');
  await expect(resultsAfter.first()).toBeVisible();
});