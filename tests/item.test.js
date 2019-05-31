const chai = require('chai');
const expect = chai.expect;
const Item = require("../src/item");

describe("item.js", function() {
  
  describe("constructor", function() {
    it("constructor() id must be a number", function() {
      expect(
        function() { new Item("1", "test", 10, 3)}
      ).to.throw(TypeError, "id must be a number");
    });
  
    it("constructor() name must be a string", function() {
      expect(
        function() { new Item(1, ["test"], 10, 3)}
      ).to.throw(TypeError, "name must be a string");
    });
  
    it("constructor() price must be a number", function() {
      expect(
        function() { new Item(1, "test", {price: 10}, 3)}
      ).to.throw(TypeError, "price must be a number");
    });
  
    it("constructor() quantity must be a number", function() {
      expect(
        function() { new Item(1, "test", 10, "3")}
      ).to.throw(TypeError, "quantity must be a number");
    });
  })

  describe("methods", function() {
    it("getId() should return item id", function() {
      const item = new Item(1, "test", 10, 3);
      expect(1).to.be.equal(item.getId());
    });
  
    it("getName() should return item name", function() {
      const item = new Item(1, "testing", 10, 3);
      expect("testing").to.be.equal(item.getName());
    });
  
    it("getPrice() should return item price", function() {
      const item = new Item(1, "test", 10, 3);
      expect(10).to.be.equal(item.getPrice());
    });
  
    it("getQuantity() should return item quantity", function() {
      const item = new Item(1, "test", 10, 3);
      expect(3).to.be.equal(item.getQuantity());
    });
  
    it("calc() should return the multiplication between the value and the quantity ", function() {
      const item = new Item(1, "test", 10.5, 3);
      expect(31.5).to.be.equal(item.calc());
    });
  })

});