import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('standard user can log in successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await expect(page).toHaveTitle(/Swag Labs/);

  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
  await expect(page.getByText('Products')).toBeVisible();
  await expect(page.locator('.inventory_list')).toBeVisible();
});