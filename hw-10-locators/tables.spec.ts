import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/tables');

  const doeRow = page
    .locator('table#table1 tbody tr')
    .filter({ hasText: 'Doe' });

  await expect(doeRow.getByRole('cell', { name: 'Jason' })).toBeVisible();
  await expect(doeRow.getByRole('cell', { name: '$100.00' })).toBeVisible();
});
