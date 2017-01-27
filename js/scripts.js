function Order(pizzaToppings, pizzaSize) {
  this.toppings = pizzaToppings;
  this.size = pizzaSize;
}

Order.prototype.price = function() {
  var pizzaPrice = 16;
  if (this.size === "Small 10\"") {
    pizzaPrice = 10;
  } else if (this.size === "Medium 12\"") {
    pizzaPrice = 12;
  } else if (this.size === "Large 14\"") {
    pizzaPrice = 14;
  } else {
    pizzaPrice = 16;
  }
  if (this.toppings.length > 3) {
    for(var i = 3; i < this.toppings.length; i++) {
      pizzaPrice +=1;
    }
  }
  return pizzaPrice;
}

var toppings = [];
var size = "";

$(document).ready(function() {
  $(".topping").click(function() {
    var topping = this.textContent;
    toppings.push(topping);
    $("#results").empty().text(toppings);
  });
  $(".size").click(function() {
    var diameter = this.textContent;
    size = diameter;
    var user = new Order(toppings, size);
    console.log(user.price());
  });
});
