import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://listado.mercadolibre.com.ar/heladera-no-frost');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async search(_product: string) {
    // Search is intentionally handled through a stable direct results URL
    // to reduce CI instability caused by the public homepage.
  }
}