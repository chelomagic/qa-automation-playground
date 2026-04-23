import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('user cannot login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'wrong_password');

  await loginPage.expectLoginError(/username and password do not match/i);
});