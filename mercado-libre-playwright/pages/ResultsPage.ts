import { Page, expect, Locator } from '@playwright/test';

export class ResultsPage {
  constructor(private page: Page) {}

  get resultItems(): Locator {
    return this.page.locator('ol.ui-search-layout > li');
  }

  get firstResultLink(): Locator {
    return this.resultItems.first().locator('a').first();
  }

  async validateResultsVisible() {
    await expect(this.resultItems.first()).toBeVisible({ timeout: 10000 });
  }

  async openFirstProduct() {
    await expect(this.firstResultLink).toBeVisible({ timeout: 10000 });
    await this.firstResultLink.click();
  }

  async applyAnyFilter() {
    const filter = this.page
      .locator('a[href*="shipping"], a[href*="condition"], a[href*="price"], a[href*="deal"]')
      .first();

    await expect(filter).toBeVisible({ timeout: 10000 });
    await filter.click();
  }
}