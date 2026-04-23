import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('locked out user cannot login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('locked_out_user', 'secret_sauce');

  await loginPage.expectLoginError(/locked out/i);
});