const Price = require("./Price");

class Discount {
  constructor(price, percentage) {
    this.price = price;
    this.percentage = percentage;
  }

  getDiscount() {
    return new Price(this.price.value * ((100-this.percentage)/100), "ISD");
  }
}

module.exports = Discount;
