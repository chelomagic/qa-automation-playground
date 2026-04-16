import { Page, expect } from '@playwright/test';

export class ResultsPage {
  constructor(private page: Page) {}

  results = this.page.locator('a[href*="/p/"], a[href*="MLA-"]');

  async validateResultsVisible() {
    await expect(this.results.first()).toBeVisible();
  }

  async openFirstProduct() {
    await this.results.first().click();
  }

  async applyAnyFilter() {
    const filter = this.page.locator(
      'a[href*="shipping"], a[href*="condition"], a[href*="price"]'
    ).first();

    await filter.click();
  }
}