const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');

test.describe('Negative Login Tests', () => {

    test('User cannot login using invalid password', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.login(
            'standard_user',
            'wrong_password'
        );

        await expect(loginPage.errorMessage)
            .toBeVisible();

    });


    test('User cannot login with empty credentials', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.clickLogin();

        await expect(loginPage.errorMessage)
            .toContainText('Username is required');

    });

});