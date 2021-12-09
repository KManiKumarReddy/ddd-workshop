const ItemRemovedEvent = require("./ItemRemovedEvent");
const { v4: uuid } = require('uuid');

class Order {
    constructor(productList) {
        this.products = productList;
        this.events = [];
        this.id = uuid();
        this.status = 'PLACED';
    }
}

module.exports = Order;
