class Address {
  constructor(city) {
    this.city = city;
    Object.seal(this);
  }
}

module.exports = Address;
