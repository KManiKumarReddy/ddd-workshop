const { v4: uuid } = require('uuid');
const AccountAddressUpdater = require('./domain_service/AccountAddressUpdater');

class Customer {
    constructor(address) {
        this.#address = address;
        this.#accounts = [];
        this.id = uuid();
    }

    updateAddress(address) {
        this.#address = address;
        AccountAddressUpdater.updateAddress(this.getAccounts(), address);
    }

    getAccounts() {
        return this.#accounts;
    }

    addAccount(account) {
        this.#accounts.push(account);
    }
}

module.exports = Customer;