class ProductsPage {
  constructor(page) {
    this.page = page;

    this.backpackAddToCartButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );

    this.cartLink = page.locator('.shopping_cart_link');
  }

  async addBackpackToCart() {
    await this.backpackAddToCartButton.click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}

module.exports = { ProductsPage };