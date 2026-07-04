import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/checkbox', {
    waitUntil: 'domcontentloaded',
  });
  await page.locator('.rc-tree-switcher').click();
  await page
    .getByRole('checkbox', { name: 'Select Desktop' })
    .click({ force: true });

  const resultBlock = page.locator('#result');

  await expect(resultBlock).toContainText('desktop');
  await expect(resultBlock).toContainText('notes');
  await expect(resultBlock).toContainText('commands');
});
