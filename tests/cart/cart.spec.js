const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { ProductsPage } = require('../../pages/ProductsPage');

test('User can add product to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.goto();

  await loginPage.login(
    process.env.TEST_USERNAME,
    process.env.TEST_PASSWORD
  );

  await productsPage.addBackpackToCart();

  await expect(
    page.locator('.shopping_cart_badge')
  ).toHaveText('1');
});