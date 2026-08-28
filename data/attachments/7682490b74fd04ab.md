# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/modal.spec.ts >> modal popup
- Location: tests/modal.spec.ts:4:1

# Error details

```
Error: page.goto: Operation was cancelled; maybe frame was detached?
Call log:
  - navigating to "https://webdriveruniversity.com/Popup-Alerts/index.html", waiting until "domcontentloaded"

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class ModalPage {
  4  |   readonly page: Page;
  5  |   readonly openModalButton: Locator;
  6  |   readonly modal: Locator;
  7  |   readonly modalBody: Locator;
  8  |   readonly closeButton: Locator;
  9  | 
  10 |   constructor(page: Page) {
  11 |     this.page = page;
  12 |     this.openModalButton = page.locator('#button2');
  13 |     this.modal = page.locator('#myModal');
  14 |     this.modalBody = page.locator('.modal-body');
  15 |     this.closeButton = page.locator('#myModal .close');
  16 |   }
  17 | 
  18 |   async navigate(): Promise<void> {
> 19 |     await this.page.goto(
     |                     ^ Error: page.goto: Operation was cancelled; maybe frame was detached?
  20 |       'https://webdriveruniversity.com/Popup-Alerts/index.html',
  21 |       { waitUntil: 'domcontentloaded' }
  22 |     );
  23 |   }
  24 | 
  25 |   async openModal(): Promise<void> {
  26 |     await this.openModalButton.click();
  27 |   }
  28 | 
  29 |   async waitForModal(): Promise<void> {
  30 |     await this.modal.waitFor({ state: 'visible' });
  31 |   }
  32 | 
  33 |   async getModalBodyText(): Promise<string> {
  34 |     return await this.modalBody.innerText();
  35 |   }
  36 | 
  37 |   async closeModal(): Promise<void> {
  38 |     await this.closeButton.click();
  39 |   }
  40 | }
  41 | 
```