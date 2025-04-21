import { test, expect } from '@playwright/test';

test('Hiển thị danh sách người dùng', async ({ page }) => {
  await page.goto('/dashboard');

  const table = page.locator('table.user-table');
  await expect(table).toBeVisible();

  const rows = table.locator('tbody tr');
  await expect(rows).toHaveCountGreaterThan(0);
});
//MAI NGỌC PHÚC