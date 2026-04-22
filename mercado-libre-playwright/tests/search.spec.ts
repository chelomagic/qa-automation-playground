import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ResultsPage } from '../pages/ResultsPage';



test('search product with POM', async ({ page }) => {
  test.skip(!!process.env.CI, 'Mercado Libre blocks GitHub Actions datacenter IPs.');

  const home = new HomePage(page);
  const results = new ResultsPage(page);


  await home.goto();
  await results.validateResultsVisible();
  
});