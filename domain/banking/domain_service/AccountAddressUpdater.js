class AccountAddressUpdater {

    updateAddressInAccounts(accounts, address) {
        accounts.forEach(account => account.updateAddress(address));
    }
}

module.exports = AccountAddressUpdater;