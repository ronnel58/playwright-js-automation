const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');
const { ProductsPage } = require('../../pages/ProductsPage');
const { CheckoutPage } = require('../../pages/CheckoutPage');

test('Complete checkout @e2e @regression', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const checkoutPage = new CheckoutPage(page);

  // 1. Login
  await loginPage.goto();

  await loginPage.login(
    process.env.TEST_USERNAME,
    process.env.TEST_PASSWORD
  );

  // Verify successful login
  await expect(page).toHaveURL(/inventory/);

  // 2. Add product
  await productsPage.addBackpackToCart();

  // 3. Open cart
  await productsPage.openCart();

  await expect(page).toHaveURL(/cart/);

  // 4. Click Checkout
  await page.locator('[data-test="checkout"]').click();

  // IMPORTANT: verify we're actually on checkout step one
  await expect(page).toHaveURL(/checkout-step-one/);

  // 5. Fill checkout information
  await checkoutPage.fillCheckoutInformation(
    'John',
    'Doe',
    '12345'
  );

  // 6. Continue
  await checkoutPage.continueCheckout();

  await expect(page).toHaveURL(/checkout-step-two/);

  // 7. Finish checkout
  await checkoutPage.finishCheckout();

  // 8. Verify order completed
  await expect(checkoutPage.completeHeader).toBeVisible();

});