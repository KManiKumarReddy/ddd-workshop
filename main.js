const Cart = require('./domain/Cart');
const Product = require('./domain/Product');
const CartItem = require('./domain/CartItem');

main = () => {
    const cart = new Cart();
    console.log(`current State of Cart:`, cart);

    const product1 = new Product('iPad Pro');
    cart.addCartItem(new CartItem(product1, 1));

    console.log(`current State of Cart:`, cart);

    const product2 = new Product('Hero ink Pen');
    cart.addCartItem(new CartItem(product2, 1));

    console.log(`current State of Cart:`, cart);

    const product3 = new Product('GM Cricket bat');
    cart.addCartItem(new CartItem(product3, 2));

    console.log(`current State of Cart:`, cart);
}

main();