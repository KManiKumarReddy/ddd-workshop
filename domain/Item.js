class Item {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    getProduct() {
        return this.product;
    }
    getQuantity() {
        return this.quantity;
    }
}

module.exports = Item;