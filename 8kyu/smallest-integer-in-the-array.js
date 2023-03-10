// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

//--My Solution--

class SmallestIntegerFinder {
  findSmallestInt(args) {
    //compare the first item to other items, and set smallest accordingly.
    let smallest = args[0];
    for (let i = 1; i <= args.length - 1; i++) {
      if (args[i] < smallest) {
        smallest = args[i];
      }
    }
    return smallest;
  }
}
