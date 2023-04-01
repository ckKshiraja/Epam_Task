/*2) After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
Write a code that gives out the total amount for different days(d).
SOL)*/
function rentalCarCost() {
  const baseCost = 40; // cost per day
  const days = prompt("How many days do you want to rent the car?"); // get user input
  let totalCost = baseCost * days; // total cost before discounts

  if (days >= 7) {
    totalCost -= 50; // $50 discount for rentals of 7 or more days
  } else if (days >= 3) {
    totalCost -= 20; // $20 discount for rentals of 3 or more days
  }

  return totalCost;
}
const totalCost = rentalCarCost();
console.log(`The total cost is $${totalCost}.`);
