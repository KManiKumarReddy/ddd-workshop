const Product = require("./../domain/Product");
const Cart = require("./../domain/Cart");
const Item = require("./../domain/Item");
const Price = require("../domain/Price");
const ItemRemovedEvent = require("../domain/ItemRemovedEvent");
const Discount = require("../domain/Discount");

describe("Test main cart", () => {

  it("add item removed feature", () => {
    const product1 = new Product("iPad Pro", new Price(100));
    const product2 = new Product("item 2", new Price(200));
    const cart = new Cart();
    cart.addItem(new Item(product1, 1));
    cart.addItem(new Item(product2, 1));
    cart.removeItem('iPad Pro')
    expect(cart.events).toBeInstanceOf(new ItemRemovedEvent())
  });

  it("two carts with same items must not be same", () => {
    const product1 = new Product("iPad Pro");
    const cart1 = new Cart();
    cart1.addItem(new Item(product1, 1));
    const cart2 = new Cart();
    cart2.addItem(new Item(product1, 1));
    expect(cart1).not.toBe(cart2);
  });

  it("add price feature", () => {
    const product1 = new Product("iPad Pro", new Price(100));
    const cart = new Cart();
    cart.addItem(new Item(product1, 1));
    expect(cart.items[0].product.price.value).toBe(100);
  });

  it("add discount", () => {
    const product = new Product("iPad Pro", new Price(1000));
    const discount = new Discount(product.price, 10)
    product.updatePrice(discount.getDiscount());
    expect(product.price.value).toBe(900);
  });
});
