import { test, expect } from '@playwright/test';
import { getFormattedDate } from '../utils/dateHelper';

test('getFormattedDate returns a string in DD-MM-YYYY format', () => {
  const date = getFormattedDate();
  const regex = /^\d{2}-\d{2}-\d{4}$/;
  expect(date).toMatch(regex);
});
