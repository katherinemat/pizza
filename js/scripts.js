function Order(pizzaToppings) {
  this.toppings = pizzaToppings;
}

var toppings = [];

$(document).ready(function() {
  $(".topping").click(function() {
    var topping = this.textContent;
    toppings.push(topping);
    $("#results").empty().text(toppings);
    var user = new Order(toppings);
    console.log(user);
  });
});
