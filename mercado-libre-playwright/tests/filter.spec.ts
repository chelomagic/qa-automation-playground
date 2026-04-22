import { expect,test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ResultsPage } from '../pages/ResultsPage';


test('apply a filter and keep seeing results', async ({ page }) => {
  test.skip(!!process.env.CI, 'Mercado Libre blocks GitHub Actions datacenter IPs.');

  const home = new HomePage(page);
  const results = new ResultsPage(page);
  const currentUrl = page.url();


  await home.goto();
  await results.validateResultsVisible();
  
  await results.applyAnyFilter();
  await expect(page).not.toHaveURL(currentUrl);
  await results.validateResultsVisible();
});