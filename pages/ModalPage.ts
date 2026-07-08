import { Page, Locator } from '@playwright/test';

export class ModalPage {
  readonly page: Page;
  readonly openModalButton: Locator;
  readonly modal: Locator;
  readonly modalBody: Locator;
  readonly closeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.openModalButton = page.locator('#button2');
    this.modal = page.locator('#myModal');
    this.modalBody = page.locator('.modal-body');
    this.closeButton = page.locator('#myModal .close');
  }

  async navigate(): Promise<void> {
    await this.page.goto(
      'https://webdriveruniversity.com/Popup-Alerts/index.html',
      { waitUntil: 'domcontentloaded' }
    );
  }

  async openModal(): Promise<void> {
    await this.openModalButton.click();
  }

  async waitForModal(): Promise<void> {
    await this.modal.waitFor({ state: 'visible' });
  }

  async getModalBodyText(): Promise<string> {
    return await this.modalBody.innerText();
  }

  async closeModal(): Promise<void> {
    await this.closeButton.click();
  }
}
