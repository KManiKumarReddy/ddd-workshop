const { v4: uuid } = require('uuid');

class Account {
    constructor(address, customer) {
        this.#address = address;
        this.#customer = customer;
        this.id = uuid();
    }

    updateAddress(address) {
        this.#address = address;
    }
}

module.exports = Account;