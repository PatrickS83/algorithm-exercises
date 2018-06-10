// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced.
// This is only applicable to the natural numbers.

// Example:

// digital_root(16)
// => 1 + 6
// => 7

// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

function digital_root(n) {
  const sum = (n + "").split("").reduce((a, b) => Number(a) + Number(b), 0);
  return sum >= 10 ? digital_root(sum) : sum;
}