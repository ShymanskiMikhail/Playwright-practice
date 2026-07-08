import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/ajax', {
    waitUntil: 'domcontentloaded',
  });
  await page.locator('#ajaxButton').click();
  const result = page.locator('.bg-success');
  await expect(result).toBeVisible({ timeout: 20000 });
  await expect(result).toHaveText('Data loaded with AJAX get request.');
});
