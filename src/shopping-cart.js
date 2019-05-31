"use strict";

function validateTypeItem(item) {
  if(item.constructor.name !== "Item") { throw new TypeError("item must be from class Item") }
}

class ShoppingCart {

  constructor() {
    this._items = [];
  }

  getItems() {
    return this._items;
  }

  addItem(item) {
    validateTypeItem(item);
    this._items.push(item);
  }

  removeItem(item) {
    validateTypeItem(item);
    this._items = this._items.filter(i => i.getId() !== item.getId());
  }

  calcTotal() {
    let total = 0;

    this._items.forEach(item => {
      total = total + item.calc();
    });

    return total;
  }
}

module.exports = ShoppingCart