import { test, expect } from '../fixtures';
import { InventoryPage } from '../pages/InventoryPage';

test('login with fixture', async ({ loginPage, page }) => {
  await loginPage.navigate();
  await loginPage.fillUsername('standard_user');
  await loginPage.fillPassword('secret_sauce');
  await loginPage.submit();

  const inventoryPage = new InventoryPage(page);
  const itemsCount = await inventoryPage.header.getCartItemsCount();
  expect(itemsCount).toBe(0);
});
