import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/Datepicker/index.html', {
    waitUntil: 'domcontentloaded',
  });

  await page.locator('#datepicker .input-group-addon').click();

  const nextMonth = page.locator('.datepicker-dropdown .next').first();
  await nextMonth.click();

  const day15 = page
    .locator('.datepicker-dropdown .day')
    .filter({ hasText: '15' })
    .first();
  await day15.click();

  await expect(page.locator('#datepicker input')).toHaveValue(/15/);
});
