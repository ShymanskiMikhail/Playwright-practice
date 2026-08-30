# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hw-10-locators/calendar.spec.ts >> test
- Location: hw-10-locators/calendar.spec.ts:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://webdriveruniversity.com/Datepicker/index.html", waiting until "domcontentloaded"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
> 4  |   await page.goto('https://webdriveruniversity.com/Datepicker/index.html', {
     |              ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  5  |     waitUntil: 'domcontentloaded',
  6  |   });
  7  | 
  8  |   await page.locator('#datepicker .input-group-addon').click();
  9  | 
  10 |   const nextMonth = page.locator('.datepicker-dropdown .next').first();
  11 |   await nextMonth.click();
  12 | 
  13 |   const day15 = page
  14 |     .locator('.datepicker-dropdown .day')
  15 |     .filter({ hasText: '15' })
  16 |     .first();
  17 |   await day15.click();
  18 | 
  19 |   await expect(page.locator('#datepicker input')).toHaveValue(/15/);
  20 | });
  21 | 
```