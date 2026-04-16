import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.mercadolibre.com.ar');
  }

  async search(product: string) {
    const searchInput = this.page.locator('input[name="as_word"]');
    await searchInput.fill(product);
    await searchInput.press('Enter');
  }
}