import { test, expect } from '@playwright/test';

test('Login sai báo lỗi', async ({ page }) => {
  await page.goto('/login');
  await page.fill('input[name="username"]', 'admin');
  await page.fill('input[name="password"]', 'sai-mat-khau');
  await page.click('button[type="submit"]');

  // Cố tình expect sai để test fail
  await expect(page).toHaveURL('/dashboard');
});
// MAI NGỌC PHÚC