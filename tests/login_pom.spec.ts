import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.fillUsername('standard_user');
  await loginPage.fillPassword('secret_sauce');
  await loginPage.submit();

  const inventoryPage = new InventoryPage(page);
  const itemsCount = await inventoryPage.header.getCartItemsCount();
  expect(itemsCount).toBe(0);
});
