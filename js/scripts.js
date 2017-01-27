function Order(pizzaToppings, pizzaSize) {
  this.toppings = pizzaToppings;
  this.size = pizzaSize;
}

Order.prototype.price = function() {
  
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
    console.log(user);
  });
});
