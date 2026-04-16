import { test, expect } from '@playwright/test';
import fs from 'fs/promises';

test('debug mercado libre page in CI', async ({ page }) => {
  await page.goto('https://listado.mercadolibre.com.ar/heladera-no-frost', {
    waitUntil: 'domcontentloaded',
  });

  await page.waitForTimeout(5000);

  console.log('FINAL URL:', page.url());
  console.log('PAGE TITLE:', await page.title());

  const html = await page.content();
  await fs.writeFile('debug-page.html', html, 'utf-8');

  await page.screenshot({ path: 'debug-page.png', fullPage: true });

  await expect(page.locator('body')).toBeVisible();
});