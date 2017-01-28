# Ping Pong

#### _Webiste for users to order multiple pizzas, selecting a size and several toppings, January 27, 2017_

#### By _**Katherine Matthews**_

## Description

_At first, this webpage only displays sizing options for pizzas. After the user selects a size, options for toppings appear. Each time a user clicks on a topping, it is added both to the display and to the toppings array in the pizza's object. If the user clicks on the topping again, it is removed from the list of toppings. The page dynamically displays the price of each pizza as it is modified and it keeps track of all pizzas ordered and the total price.  https://katherinemat.github.io/pizza/_

## Setup/Installation Requirements

* _Clone repository from https://github.com/katherinemat/pizza.git_
* _Double-click index.html to open this webpage in browser_
*_Click on sizes and on toppings to see price of pizza change_
*_Click on "Save this pie and add another" to add pizza to entire order_

## Known Bugs

_The submit buttons currently do not lead anywhere. If I had more time, I would hide everything on the page and replace it with a form asking for user's name, credit card information, etc. to complete the order. Another problem is that the list of toppings overflows into the footer and the user can't click the toppings that intersect with the footer. Also, I am unsure if I separated code correctly into business and front-end logic. Lines 73-79 for instance: should they remain inside of the click event listener? Could these lines of code be consolidated into a function? I think the answer is no because the function would need to return multiple values and functions can only return one value._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_

#### Below is a list of the specification I wrote for this project:
1. return pizza toppings that user selects; input: selects tomato, spinach, pesto, and mozzarella; output: tomato, spinach, pesto, and mozzarella
2. return pizza toppings and size of pizza upon submit; input: toppings: bell pepper on a large pizza; output: bell pepper on a large pizza
3. return same price of pizza, no matter which toppings or size of pizza submitted; input: pepperoni, sausage; output: $15 always
4. return specific price of pizza, depending on size of pizza and amount of toppings; input: small cheese pizza; output: $10
Ice Box:
5. List which items are worth what; input: large pepperoni and sausage pizza; output: large - $15, pepperoni and sausage - $3 each, $21 total
6. Allow user to choose extra of a topping from list of selected toppings; input: toppings - tomato, spinach, pesto, and mozzarella; output: would you like to double any of your toppings? tomato, spinach, pesto, mozzarella
7. Add a box for user to type in any special requests; input: light sauce or doughy crust; output: you've requested the following: light sauce and doughy crust
8. Create option for user to order more than one pizza; input: click on button to add another pizza to order; output: another form shows up where user can order another pizza
9. Allow user to select delivery option; input: pizza order is more than $30; output delivery is free, please enter your address

### License

*This software is licensed under the GPL and MIT licenses.*

Copyright (c) 2017 **_Katherine Matthews_**
