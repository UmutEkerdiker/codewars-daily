// DESCRIPTION:
// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

//--My Solution--

//Logic is created with simple maths
function rentalCarCost(d) {
  //Calculate daily total
  let dailyTotal = d * 40;
  //if its longer than 7 days, reduce 50 dollars, if its longer than 3 days, reduce 20 dollars.
  if (d >= 7) {
    return dailyTotal - 50;
  } else if (d >= 3) {
    return dailyTotal - 20;
  }
  return dailyTotal;
}
