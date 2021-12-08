const ActivityLog = require("./ActivityLog");
const { v4: uuid } = require('uuid');

class Cart {
    constructor() {
        this.items = [];
        this.activityLog = new ActivityLog();
        this.createdAt = uuid();
    }

    addItem(item) {
        this.items.push(item);
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
            this.activityLog.recordItemRemoved(name);
        }
    }
}

module.exports = Cart;
