// Basic Algorithm Scripting: Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number.
// (The built-in repeat()-method should not be used)

function repeatStringNumTimes(str, num) {
  if (num < 0) return '';

  let result = '';
  for (let i = 1; i <= num; i++) {
    result += str;
  }

  return result;
}

repeatStringNumTimes('abc', 3);
