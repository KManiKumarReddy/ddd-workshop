class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(name) {
    var index = 0;
    var flag = false;
    this.items.forEach((item, i) => {
      if (item.product.name == name) {
        index = i;
        flag = true;
      }
    });
    this.items.splice(index, 1);
  }
}

module.exports = Cart;
