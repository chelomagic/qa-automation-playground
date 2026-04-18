import { Page, expect, Locator } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  get cartItems(): Locator {
    return this.page.locator('.cart_item');
  }

  get itemNames(): Locator {
    return this.page.locator('.inventory_item_name');
  }

  get checkoutButton(): Locator {
    return this.page.locator('#checkout');
  }

  async expectCartItemVisible() {
    await expect(this.cartItems.first()).toBeVisible();
  }

  async expectItemCount(count: number) {
    await expect(this.cartItems).toHaveCount(count);
  }

  async expectFirstItemNameVisible() {
    await expect(this.itemNames.first()).toBeVisible();
  }

  async goToCheckout() {
    await this.checkoutButton.click();
  }
}