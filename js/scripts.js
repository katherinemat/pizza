var toppings = [];

$(document).ready(function() {
  $(".topping").click(function() {
    var topping = this.textContent;
    toppings.push(topping);
    $("#results").empty().text(toppings);
  });
});
