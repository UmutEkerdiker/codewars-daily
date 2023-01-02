// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

//--My Solution--

function countSheeps(arrayOfSheep) {
  //set a counter variable
  let sheepCount = 0;
  //Loop through the array, increase the counter if element is true
  //Flex a bit with the for of loop, have fun with it
  for (const sheep of arrayOfSheep) {
    if (sheep) {
      sheepCount++;
    }
  }
  return sheepCount;
}
