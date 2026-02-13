import { test,expect } from "@playwright/test"; 

test('Login with valid password', async ({ page }) => 
{
await page.goto('https://www.saucedemo.com/'); 
await page.fill('#user-name', 'standard_user');
await page.fill('#password', 'secret_sauce');
await page.click('#login-button');


 // Verify error message appears
  // await expect(page.locator('.error')).toHaveText('Invalid credentials');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  //await expect(page.locator('.title')).toHaveText('Products');
   await page.screenshot({ path: 'inventory-page.png' });

});

test('Login with invalid userid or password', async ({ page }) => 
{
await page.goto('https://www.saucedemo.com/'); 
await page.fill('#user-name', 'error_uer');
await page.fill('#password', 'secret_suce');
await page.click('#login-button');


 // Verify error message appears
   await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match');
   await page.screenshot({ path: 'invalid-login.png' });

});