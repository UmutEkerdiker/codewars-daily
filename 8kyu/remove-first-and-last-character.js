// It's pretty straightforward. Your goal is to create a function that removes the first
// and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//--My Solution--

function removeChar(str) {
  //We can access the length of the string, so, return a new string by starting from the 2nd character, ending with the last character
  //slice method includes the first parameter, excludes the last one.
  return str.slice(1, str.length - 1);
}
