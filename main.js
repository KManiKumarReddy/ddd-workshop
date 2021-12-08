const Cart = require('./domain/Cart');
const Product = require('./domain/Product');
const Item = require('./domain/Item');

main = () => {
    const cart1 = new Cart();
    console.log(`current State of Cart:`, cart1);

    const product1 = new Product('iPad Pro');
    cart1.addItem(new Item(product1, 1));

    console.log(`current State of Cart:`, cart1);

    const product2 = new Product('Hero ink Pen');
    cart1.addItem(new Item(product2, 1));

    console.log(`current State of Cart:`, cart1);

    const product3 = new Product('GM Cricket bat');
    cart1.addItem(new Item(product3, 2));

    console.log(`current State of Cart:`, cart1);

    cart1.removeItem('iPad Pro')

    console.dir([`current State of Cart:`, cart1], { depth: null });


    // problem #6 add to multiple carts and ensure they are unique

    const cart2 = new Cart();
    cart2.addItem(new Item(product2, 1));

    console.log(`\n\n#6\n cart1 === cart2 => ${cart1 === cart2}`);

    console.dir([`current State of Cart 1:`, cart1], { depth: null });
    console.dir([`current State of Cart 2:`, cart2], { depth: null });
}

main();