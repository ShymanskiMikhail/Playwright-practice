import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_controls', {
    waitUntil: 'domcontentloaded',
  });
  await page.getByRole('button', { name: 'Remove' }).click();
  const result = page.locator('#message');
  const loader = page.locator('#loading');
  await expect(loader).toBeVisible();
  await expect(loader).toBeHidden({ timeout: 20000 });
  await expect(result).toBeVisible();
  await expect(result).toHaveText("It's gone!");
});
