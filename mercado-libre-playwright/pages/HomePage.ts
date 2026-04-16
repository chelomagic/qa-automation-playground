import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.mercadolibre.com.ar');
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(2000);
  }

  async search(product: string) {
    const searchInput = this.page.locator('input[name="as_word"]');

    await searchInput.waitFor({ state: 'visible', timeout: 10000 });
    await searchInput.fill(product);
    await searchInput.press('Enter');
  }
}