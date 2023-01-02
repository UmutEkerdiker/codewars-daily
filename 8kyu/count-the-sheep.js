// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
// Input will always be valid, i.e. no negative integers.

//--My Solution--

function countSheep(num) {
  //Set an empty string
  let final = "";
  //Concatenate string in the loop to this string, using template literals
  for (i = 1; i <= num; i++) {
    final += `${i} sheep...`;
  }
  return final;
}
