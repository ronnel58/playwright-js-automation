require('dotenv').config();

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');

const loginData = [
  {
    username: 'standard_user',
    password: 'wrongpassword'
  },
  {
    username: '',
    password: 'secret_sauce'
  },
  {
    username: 'standard_user',
    password: ''
  }
];

for (const data of loginData) {
  test(`Login test - username: ${data.username} password: ${data.password}`, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
      data.username,
      data.password
    );

    // Add assertion here
  });
}