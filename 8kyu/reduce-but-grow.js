// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//--My Solution--

function grow(x) {
  //Set the first element of the array in a variable.
  let multiplication = x[0];
  //multiply the items one by one.
  for (let i = 1; i < x.length; i++) {
    multiplication *= x[i];
  }
  return multiplication;
}
