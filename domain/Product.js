class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  updatePrice(price) {
    this.price = price;
  }
}

module.exports = Product;
