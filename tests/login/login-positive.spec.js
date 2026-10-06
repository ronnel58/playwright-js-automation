const { test, expect } = require('../../fixtures/testFixtures');

test('Valid user login @smoke @regression', async ({ loginPage, page }) => {

  await loginPage.goto();

  await loginPage.login(
    process.env.TEST_USERNAME,
    process.env.TEST_PASSWORD
  );

  await expect(page).toHaveURL(/inventory/);

});