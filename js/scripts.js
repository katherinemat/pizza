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

var orders = [];
var toppings = [];
var size = "";
var user;

var toppingsDisplay = function(arrayOfToppings) {
  var toppingsString = "";
  if (toppings.length > 1) {
    toppingsString = toppings.join(", ");
  } else {
    toppingsString = toppings.join(" ");
  }
  return toppingsString;
}

$(document).ready(function() {
  $(".size").click(function() {
    var diameter = this.textContent;
    size = diameter;
    if (toppings.length > 0) {
      user = new Order(toppings, size);
      $("#showPrice").empty().text(user.price());
    }
    $("#showSize").empty().text(size);
    $(".results").show();
    $(".chooseToppings").show();
  });
  $(".topping").click(function() {
    var topping = this.textContent;
    if (toppings.indexOf(topping) === -1) {
      toppings.push(topping);
    } else {
      var repeatIndex = toppings.indexOf(topping);
      toppings.splice(repeatIndex, 1);
    }
    var displayToppings = toppingsDisplay(toppings);
    $("#showToppings").empty().text(displayToppings);
    user = new Order(toppings, size);
    $("#showPrice").empty().text(user.price());
    $("#toppings, #price").show();
  });
  $("#add").click(function() {
    orders.push(user);
    user = "";
    toppings = [];
    size = "";
    $(".results, .chooseToppings, #toppings, #price").hide();
  })
});
