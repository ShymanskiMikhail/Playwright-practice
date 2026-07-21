import { test } from '@playwright/test';
import { ShopFacade } from '../facades/ShopFacade';

test('login with Facade', async ({ page }) => {
  const shopFacade = new ShopFacade(page);

  await shopFacade.loginAndAddItemToCart('standard_user', 'secret_sauce');
});
