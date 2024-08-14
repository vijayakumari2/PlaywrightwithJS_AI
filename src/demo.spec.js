const { test, expect } = require('@playwright/test');


test.beforeEach(async({page}) =>{
    await page.goto('https://app.qa.carbonplace.io/');
})
test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Carbonplace/);
});

test('Login with issuer',async({page}) => {
    await page.getByTestId('login-btn').click()
    await page.getByLabel('Email address').fill('cp-qa-admin@carbonplace.com')
    await page.getByLabel('Password').fill('Password123')
    await page.getByRole('button', { name: 'Continue' }).click()
    await page.waitForSelector('//h1[@class="title"]',(3000))
    await expect(page.locator('//h1[@class="title"]')).toBeVisible()
})

test.only('create an bank entity',async function({page}){
  // await page.goto('https://app.qa.carbonplace.io/');
  await page.getByTestId('login-btn').click();
  await page.getByLabel('Email address').fill('cp-qa-admin@carbonplace.com');
  await page.getByLabel('Password').fill('Password123');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('link', { name: 'User Management' }).click();
  await page.getByTestId('create-entity-btn').click();
  await page.getByTestId('create-bank-btn').click();
  await page.getByPlaceholder('Bank name').fill('testBank9');
  await page.getByPlaceholder('Admin\'s first name').fill('Admin');
  await page.getByPlaceholder('Admin\'s last name').fill('testbank09');
  await page.getByPlaceholder('Admin\'s email address').fill('admin_test_bank_09@dl6pjxsk.mailosaur.net');
  try {
    await page.getByTestId('btn-form-submit').click({
      timeout: 120000,
    });
  } catch (error) {
    if (error instanceof playwright.errors.TimeoutError)
      console.log('Timeout!');
  }
  await page.getByRole('cell', { name: 'testBank9', exact: true }).click();
});
