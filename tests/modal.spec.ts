import { test, expect } from '@playwright/test';
import { ModalPage } from '../pages/ModalPage';

test('modal popup', async ({ page }) => {
  const modalPage = new ModalPage(page);

  await modalPage.navigate();
  await modalPage.openModal();
  await modalPage.waitForModal();

  const bodyText = await modalPage.getModalBodyText();
  console.log('Текст модалки:', bodyText); //в задании сказано убедиться что класс умеет считывать текст внутри модалки

  await modalPage.closeModal();
  await expect(modalPage.modal).toBeHidden();
});
