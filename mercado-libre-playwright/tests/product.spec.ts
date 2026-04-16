import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ResultsPage } from '../pages/ResultsPage';
import { ProductPage } from '../pages/ProductPage';

test('open product with POM', async ({ page }) => {
  const home = new HomePage(page);
  const results = new ResultsPage(page);
  const product = new ProductPage(page);

  await home.goto();
  await results.validateResultsVisible();
  await results.openFirstProduct();
  await product.validateProductLoaded();
});