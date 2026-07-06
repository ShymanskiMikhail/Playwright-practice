import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto(
    'https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html'
  );
  await page.locator('#dropdowm-menu-1').selectOption('python');

  const yellowButton = page.locator('input[value="yellow"]');
  await yellowButton.check();
  await expect(yellowButton).toBeChecked();
  await expect(page.locator('input[value="cabbage"]')).toBeDisabled();
});
