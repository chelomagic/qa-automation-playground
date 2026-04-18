import { Page, expect, Locator } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  get inventoryItems(): Locator {
    return this.page.locator('.inventory_item');
  }

  get firstAddToCartButton(): Locator {
    return this.page.locator('button:has-text("Add to cart")').first();
  }

  get cartBadge(): Locator {
    return this.page.locator('.shopping_cart_badge');
  }

  get cartLink(): Locator {
    return this.page.locator('.shopping_cart_link');
  }

  async expectInventoryVisible() {
    await expect(this.inventoryItems.first()).toBeVisible();
  }

  async addFirstItemToCart() {
    await this.firstAddToCartButton.click();
  }

  async expectCartCount(count: string) {
    await expect(this.cartBadge).toHaveText(count);
  }

  async openCart() {
    await this.cartLink.click();
  }
}