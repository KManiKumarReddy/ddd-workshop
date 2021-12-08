const Product = require("./../domain/Product");
const Cart = require("./../domain/Cart");
const Item = require("./../domain/Item");

describe("Test main cart", () => {
    
  it("two carts with same items must not be same", () => {
    const product1 = new Product("iPad Pro");
    const cart1 = new Cart();
    cart1.addItem(new Item(product1, 1));
    const cart2 = new Cart();
    cart2.addItem(new Item(product1, 1));
    expect(cart1).not.toBe(cart2);
  });
});
