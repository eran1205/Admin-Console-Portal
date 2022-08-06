import { test, expect } from '@playwright/test';

test('Overview page should test title', async ({ page }) => {
    await page.goto('http://localhost:3000/dashboard');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Admin Dashboard/);
  
    // create a locator
    // const getStarted = page.locator('text=Get Started');
  
    // // Expect an attribute "to be strictly equal" to the value.
    // await expect(getStarted).toHaveAttribute('href', '/docs/intro');
  
    // // Click the get started link.
    // await getStarted.click();
  
    // // Expects the URL to contain intro.
    // await expect(page).toHaveURL(/.*intro/);
 });