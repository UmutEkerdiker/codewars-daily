// Very simple, given an integer or a floating-point number, find its opposite.

//--My Solution--

function opposite(number) {
  //Always good to think about edge cases.
  //They force me to think creatively while finding solutions.
  if (number === 0) {
    return 0;
  }

  return -number;
}
