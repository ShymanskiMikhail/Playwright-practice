# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hw-10-locators/complex.spec.ts >> test
- Location: hw-10-locators/complex.spec.ts:3:1

# Error details

```
Error: page.goto: Operation was cancelled; maybe frame was detached?
Call log:
  - navigating to "https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
> 4  |   await page.goto(
     |              ^ Error: page.goto: Operation was cancelled; maybe frame was detached?
  5  |     'https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html'
  6  |   );
  7  |   await page.locator('#dropdowm-menu-1').selectOption('python');
  8  | 
  9  |   const yellowButton = page.locator('input[value="yellow"]');
  10 |   await yellowButton.check();
  11 |   await expect(yellowButton).toBeChecked();
  12 |   await expect(page.locator('input[value="cabbage"]')).toBeDisabled();
  13 | });
  14 | 
```