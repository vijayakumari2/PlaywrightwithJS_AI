import { expect, test } from './test-with-fixture.ts'

test('Zerpstep test', async ({ page,ai}) => {
    await page.goto('https://google.com');
    const title = await page.title();
    expect(title).toBe('Google');
  });

  test.describe('@GoogleTesting', () => {
    test('can search playwright', async ({ page, ai }) => {
      await page.goto('https://www.google.com/', { waitUntil: 'networkidle' })
      await ai('Search for "playwright"')
      await ai('Click the first search result for Playwright')
      await page.waitForTimeout(2_000)
      await ai('Enter "session storage" in the search box on the Playwright page and press Enter')
      await page.waitForTimeout(2_000)
    })
  })
  
  test.describe('@dashbold', () => {
    test('can login and logout', async ({ page,ai}) => {
      await page.goto('https://dashbold.co.uk')
      const title = await page.title();
      await page.waitForTimeout(5_000)
      await ai(
        `Enter "vijaya.kumari@appnetwise.com" as the email`)
        await ai('click "continue" button')
        await ai(`Enter Password as "Pagre324" `)
         await ai('Click continue')
        await ai('Click the logout link')
    })
  })