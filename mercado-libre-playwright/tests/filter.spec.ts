import { test, expect } from '@playwright/test';

test('apply a filter and keep seeing results', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.ar');

  const searchInput = page.locator('input[name="as_word"]');
  await expect(searchInput).toBeVisible();

  await searchInput.fill('heladera no frost');
  await searchInput.press('Enter');

  await page.waitForLoadState('domcontentloaded');

  const resultsBefore = page.locator('a[href*="/p/"], a[href*="MLA-"]');
  await expect(resultsBefore.first()).toBeVisible();

  const currentUrl = page.url();

  const filterOption = page.locator('a[href*="shipping"], a[href*="condition"], a[href*="deal"], a[href*="price"]').first();
  await expect(filterOption).toBeVisible();

  await filterOption.click();
  await page.waitForLoadState('domcontentloaded');

  await expect(page).not.toHaveURL(currentUrl);

  const resultsAfter = page.locator('a[href*="/p/"], a[href*="MLA-"]');
  await expect(resultsAfter.first()).toBeVisible();
});