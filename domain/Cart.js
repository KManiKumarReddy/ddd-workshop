const ActivityLog = require("./ActivityLog");
const ItemRemovedEvent = require("./ItemRemovedEvent");
const { v4: uuid } = require('uuid');

class Cart {
    constructor() {
        this.items = [];
        this.events = [];
        this.id = uuid();
        this.checkedOut = false;
    }

    addItem(item) {
        this.items.push(item);
    }

    getItems() {
        return this.items;
    }

    removeItem(name) {
        var index = 0;
        var flag = false;
        this.items.forEach((item, i) => {
            if (item.product.name == name) {
                index = i;
                flag = true;
            }
        });
        if (flag) {
            this.items.splice(index, 1);
            this.events.push(new ItemRemovedEvent())
        }
    }

    markCheckedOut() {
        this.checkedOut = true;
    }
}

module.exports = Cart;
