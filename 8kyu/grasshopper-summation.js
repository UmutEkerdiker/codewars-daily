// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

//--My Solution--

function summation(num) {
  //Set a variable
  let summation = 0;
  //Loop through all integers from one to the input number and add them to the summation.
  for (i = 1; i <= num; i++) {
    summation += i;
  }
  return summation;
}
