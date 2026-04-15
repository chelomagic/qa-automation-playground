import { test, expect } from '@playwright/test';

test('search for a product on Mercado Libre', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.ar');

  const searchInput = page.locator('input[name="as_word"]');
  await expect(searchInput).toBeVisible();

  await searchInput.fill('heladera no frost');
  await searchInput.press('Enter');

  await page.waitForLoadState('domcontentloaded');

  await expect(page).toHaveURL(/search|heladera/i);

  const results = page.locator('a[href*="/p/"], a[href*="MLA-"]');
  await expect(results.first()).toBeVisible();
});