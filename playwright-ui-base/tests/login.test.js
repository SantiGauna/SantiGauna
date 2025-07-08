import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page.js';

test('Login válido en SauceDemo', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
});