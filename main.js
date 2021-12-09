const Cart = require('./domain/Cart');
const Product = require('./domain/Product');
const Item = require('./domain/Item');
const Price = require('./domain/Price');
const Discount = require('./domain/Discount');

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

    // problem #7 add price to product

    const product4 = new Product('MacBook Pro', new Price(10000));
    cart1.addItem(new Item(product4, 1));

    console.log(`\n\n#7\n product price => `, product4.price);
    console.dir(cart1, { depth: null });

    const competitorMap = {
        'MacBook Pro': new Price(100, 'USD')
    }

    console.log(competitorMap['iPad Pro']);

    const discount = new Discount(product4.price, 10)
    product4.updatePrice(discount.getDiscount());
    console.log(product4);
}

main();