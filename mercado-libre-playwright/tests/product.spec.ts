import { test, expect } from '@playwright/test';

test('open product and validate info', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.ar');

  const searchInput = page.locator('input[name="as_word"]');
  await searchInput.fill('heladera no frost');
  await searchInput.press('Enter');

  await page.waitForLoadState('domcontentloaded');

  const firstProduct = page.locator('a[href*="/p/"], a[href*="MLA-"]').first();
  await firstProduct.click();

  await page.waitForLoadState('domcontentloaded');

  const title = page.locator('h1');
  await expect(title).toBeVisible();

  const price = page.locator('.andes-money-amount').first();
  await expect(price).toBeVisible();
});