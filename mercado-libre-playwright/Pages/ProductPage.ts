import { Page, expect } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async validateProductLoaded() {
    const title = this.page.locator('h1');
    const price = this.page.locator('.andes-money-amount').first();

    await expect(title).toBeVisible();
    await expect(price).toBeVisible();
  }
}