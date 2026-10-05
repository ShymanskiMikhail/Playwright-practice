# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hw-11-playwright/disappear.spec.ts >> test
- Location: hw-11-playwright/disappear.spec.ts:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeHidden() failed

Locator:  locator('#loading')
Expected: hidden
Received: visible

Call log:
  - Expect "toBeHidden" with timeout 20000ms
  - waiting for locator('#loading')
    7 × locator resolved to <div id="loading">…</div>
      - unexpected value "visible"

```

```yaml
- text: Wait for it...
- img
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto('https://the-internet.herokuapp.com/dynamic_controls', {
  5  |     waitUntil: 'domcontentloaded',
  6  |   });
  7  |   await page.getByRole('button', { name: 'Remove' }).click();
  8  |   const result = page.locator('#message');
  9  |   const loader = page.locator('#loading');
  10 |   await expect(loader).toBeVisible();
> 11 |   await expect(loader).toBeHidden({ timeout: 20000 });
     |                        ^ Error: expect(locator).toBeHidden() failed
  12 |   await expect(result).toBeVisible();
  13 |   await expect(result).toHaveText("It's gone!");
  14 | });
  15 | 
```