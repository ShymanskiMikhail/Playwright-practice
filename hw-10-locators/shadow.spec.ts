import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/shadowdom', {
    waitUntil: 'domcontentloaded',
  });

  await page.locator('guid-generator').locator('#buttonGenerate').click();

  const editField = page.locator('guid-generator').locator('#editField');
  await expect(editField).not.toHaveValue('');
});
