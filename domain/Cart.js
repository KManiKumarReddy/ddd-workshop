class Cart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }
}

module.exports = Cart;