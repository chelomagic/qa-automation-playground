import { Page, expect, Locator } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  get firstNameInput(): Locator {
    return this.page.locator('#first-name');
  }

  get lastNameInput(): Locator {
    return this.page.locator('#last-name');
  }

  get postalCodeInput(): Locator {
    return this.page.locator('#postal-code');
  }

  get continueButton(): Locator {
    return this.page.locator('#continue');
  }

  get finishButton(): Locator {
    return this.page.locator('#finish');
  }

  get successMessage(): Locator {
    return this.page.locator('.complete-header');
  }

  async fillCheckoutInfo(first: string, last: string, zip: string) {
    await this.firstNameInput.fill(first);
    await this.lastNameInput.fill(last);
    await this.postalCodeInput.fill(zip);
  }

  async continue() {
    await this.continueButton.click();
  }

  async finish() {
    await this.finishButton.click();
  }

  async expectSuccess() {
    await expect(this.successMessage).toHaveText(/thank you/i);
  }
}