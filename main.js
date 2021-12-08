const Cart = require('./domain/Cart');
const Product = require('./domain/Product');

main = () => {
    const cart = new Cart();
    console.log(`current State of Cart:`, cart);

    const product = new Product('iPad Pro');
    cart.addProduct(product);

    console.log(`current State of Cart:`, cart);

    const product2 = new Product('Hero ink Pen');
    cart.addProduct(product2);

    console.log(`current State of Cart:`, cart);
}

main();