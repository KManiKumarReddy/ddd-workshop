const Cart = require('./domain/Cart');
const Product = require('./domain/Product');
const Item = require('./domain/Item');

main = () => {
    const cart = new Cart();
    console.log(`current State of Cart:`, cart);

    const product1 = new Product('iPad Pro');
    cart.addItem(new Item(product1, 1));

    console.log(`current State of Cart:`, cart);

    const product2 = new Product('Hero ink Pen');
    cart.addItem(new Item(product2, 1));

    console.log(`current State of Cart:`, cart);

    const product3 = new Product('GM Cricket bat');
    cart.addItem(new Item(product3, 2));

    console.log(`current State of Cart:`, cart);
}

main();