const base = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');

const { ProductsPage } = require('../pages/ProductsPage');

const test = base.test.extend({

    loginPage: async ({ page }, use) => {

        await use(
            new LoginPage(page)
        );

    },


    productsPage: async ({ page }, use) => {

        await use(
            new ProductsPage(page)
        );

    }

});

module.exports = {
    test,
    expect: base.expect
};