import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/frames');

  const frame = page.frameLocator('#frame1');
  const heading = frame.locator('#sampleHeading');

  await expect(heading).toContainText('This is a sample page');
});
