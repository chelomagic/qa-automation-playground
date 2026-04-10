import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('user sees an error with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('wrong_user', 'secret_sauce');

  await expect(loginPage.errorMessage).toBeVisible();
});