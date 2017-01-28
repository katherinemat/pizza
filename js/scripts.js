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

Order.prototype.toppingsDisplay = function() {
  var toppingsString = "";
  if (this.toppings.length > 1) {
    toppingsString = this.toppings.join(", ");
  } else {
    toppingsString = this.toppings.join(" ");
  }
  return toppingsString;
}

var orders = [];
var toppings = [];
var size = "";
var user;

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
    user = new Order(toppings, size);
    var displayToppings = user.toppingsDisplay();
    $("#showToppings").empty().text(displayToppings);
    $("#showPrice").empty().text(user.price());
    $("#toppings, #price").show();
  });
  $("#add").click(function() {
    orders.push(user);
    user = "";
    toppings = [];
    size = "";
    $(".results, .chooseToppings, #toppings, #price").hide();
    $("footer").show();
    var totalPrice = 0;
    for (k = 0; k < orders.length; k++) {
      var eachToppings = (orders[k].toppingsDisplay());
      var eachSize = orders[k].size;
      var eachPrice = orders[k].price();
      totalPrice += eachPrice;
    }
    $(".multipleOrders").append("<li>" + eachSize + " pie with " + eachToppings + " for " + eachPrice + " dollars. </li>");
    $("#totalPrice").empty().text(totalPrice);
  });
});
