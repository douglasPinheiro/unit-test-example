"use strict";

class Item {

  constructor(id, name, price, quantity) {
    if(typeof(id) !== "number") { throw new TypeError("id must be a number") }
    if(typeof(name) !== "string") { throw new TypeError("name must be a string") }
    if(typeof(price) !== "number") { throw new TypeError("price must be a number") }
    if(typeof(quantity) !== "number") { throw new TypeError("quantity must be a number") }

    this._id = id;
    this._name = name;
    this._price = price;
    this._quantity = quantity;
  }

  getId() {
    return this._id;
  }

  getName() {
    return this._name;
  }

  getPrice() {
    return this._price;
  }

  getQuantity() {
    return this._quantity;
  }

  calc() {
    return this._price * this._quantity;
  }
}

module.exports = Item