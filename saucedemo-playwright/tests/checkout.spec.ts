import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('user can complete checkout flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.expectInventoryVisible();
  await inventoryPage.addFirstItemToCart();
  await inventoryPage.openCart();

  await cartPage.expectCartItemVisible();
  await cartPage.goToCheckout();

  await checkoutPage.fillCheckoutInfo('Esteban', 'Test', '1234');
  await checkoutPage.continue();
  await checkoutPage.finish();

  await checkoutPage.expectSuccess();
});