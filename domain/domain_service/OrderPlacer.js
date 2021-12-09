const Order = require("../Order");

class OrderPlacer {

    placeOrder(cart) {
        const products = [];
        cart.getItems().forEach((item) => {
            for (let i = 0; i < item.getQuantity(); i++)
                products.push(item.getProduct());
        });
        cart.markCheckedOut();
        return new Order(products);
    }
}

module.exports = OrderPlacer;