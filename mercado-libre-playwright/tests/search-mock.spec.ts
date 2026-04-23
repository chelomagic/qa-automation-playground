import { test, expect} from '@playwright/test';
import { ResultsPage } from '../pages/ResultsPage';
import fs from 'fs/promises';

test('search results load with mock', async ({ page}) => {
  const html = await fs.readFile ('./mocks/results-page.html', 'utf-8');

  await page.route('**/listado.mercadolibre.com.ar/**', route => {
    route.fulfill ({ status:200, body: html, contentType: 'text/html'});
  });

 const results = new ResultsPage(page);
 await page.goto('https://listado.mercadolibre.com.ar/heladera-no-frost');
 await results.validateResultsVisible();
});