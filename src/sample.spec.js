import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.qa.carbonplace.io/');
  await page.goto('https://app.qa.carbonplace.io/login?returnTo=/');
  await page.getByTestId('login-btn').click();
  await page.getByLabel('Email address').click();
  await page.getByLabel('Email address').fill('cp-qa-admin@carbonplace.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Password123');
  await page.getByRole('button', { name: 'Continue' }).click();
//   await page.getByRole('link', { name: 'Projects' }).click();
  await page.getByRole('link', { name: 'Orders & Deals' }).click();
  await page.getByRole('link', { name: 'On-Ramp Requests' }).click();
  await page.getByRole('link', { name: 'Settlements' }).click();
  await page.getByRole('link', { name: 'User Management' }).click();
  await page.getByTestId('clients').click();
  await page.getByTestId('header-user-email').click();
  await page.getByTestId('entities ').click();
  await page.getByText('10cp-qa-admin@carbonplace.com').click();
//   await page.getByTestId('create-entity-btn').click();
});