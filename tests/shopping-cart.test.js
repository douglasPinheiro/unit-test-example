const chai = require('chai');
const expect = chai.expect;
const Item = require("../src/item");
const ShoppingCart = require("../src/shopping-cart");

describe("shopping-cart.test", function(){
  
  it("I should can instanciate a ShoppingCart", function() {
    new ShoppingCart();
  });

  it("addItem(item) I should can add only Item instance", function() {
    const shoppingCart = new ShoppingCart();
    
    expect(
      function() { shoppingCart.addItem({ price: 1 }); }
    ).to.throw(TypeError, "item must be from class Item");
  })

  it("addItem(item) I should can add a item to cart", function() {
    const item = new Item(1, "notebook", 2000, 1);
    const shoppingCart = new ShoppingCart();

    shoppingCart.addItem(item);
  })

  it("getItems() should return [] if shopping cart is empty", function() {
    const shoppingCart = new ShoppingCart();
    expect(shoppingCart.getItems()).to.be.instanceof(Array);
    expect(0).to.be.equal(shoppingCart.getItems().length);
  })

  it("getItems() I should can get all items from cart", function() {
    const item = new Item(1, "notebook", 2000, 1);
    const shoppingCart = new ShoppingCart();
    expect(0).to.be.equal(shoppingCart.getItems().length);

    shoppingCart.addItem(item);

    expect(1).to.be.equal(shoppingCart.getItems().length);
    expect(item).to.be.equal(shoppingCart.getItems()[0]);
  })

  it("removeItem(item) I should can remove only instances from class Item", function() {
    const shoppingCart = new ShoppingCart();
    const item = new Item(1, "TV", 2500, 1);
    
    shoppingCart.addItem(item);
    expect(1).to.be.equal(shoppingCart.getItems().length);

    expect(
      function() { shoppingCart.removeItem({id: 1}) }
    ).to.throw(TypeError, "item must be from class Item");
  })

  it("removeItem(item) I should can remove item from cart", function() {
    const shoppingCart = new ShoppingCart();
    const item1 = new Item(1, "notebook", 2000, 1);
    const item2 = new Item(2, "keyboard", 200, 2);
    
    shoppingCart.addItem(item1);
    shoppingCart.addItem(item2);
    expect(2).to.be.equal(shoppingCart.getItems().length);

    shoppingCart.removeItem(item1);

    expect(1).to.be.equal(shoppingCart.getItems().length);
    expect(item2).to.be.equal(shoppingCart.getItems()[0]);
  })

  it("calcTotal() should return 0 if there is no items", function() {
    const shoppingCart = new ShoppingCart();
    expect(0).to.be.equal(shoppingCart.calcTotal());
  })

  it("calcTotal() should return the total price from items", function() {
    //prepare
    const shoppingCart = new ShoppingCart();
    const item1 = new Item(1, "notebook", 2000, 1);
    const item2 = new Item(2, "keyboard", 200.5, 2);
    const item3 = new Item(3, "mouse", 150, 3);
    
    //action
    shoppingCart.addItem(item1);
    shoppingCart.addItem(item2);
    shoppingCart.addItem(item3);

    //assert
    expect(2851).to.be.equal(shoppingCart.calcTotal());
  })
  
});