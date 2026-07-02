import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
   await page.goto('https://demoqa.com/', { waitUntil: 'domcontentloaded' });
   await expect(page).toHaveTitle('demosite'); 
});