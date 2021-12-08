class Price {
    constructor(value, currency) {
        this.value = value;
        this.currency = currency || 'INR';
    }
}

Price.prototype.toString = () => {
    return (new Intl.NumberFormat('en-IN', { style: 'currency', currency: this.currency })).format(this.value);
}

module.exports = Price;