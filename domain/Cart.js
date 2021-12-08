class Cart {
    constructor() {
        this.cartItems = [];
    }

    addCartItem(cartItem) {
        this.cartItems.push(cartItem);
    }
}

module.exports = Cart;