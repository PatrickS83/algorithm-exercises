/* eslint-disable */
// This kata is designed to test your ability to extend the functionality of built-in classes.
// In this case, we want you to extend the built-in Array class with the following methods:
// square(), cube(), average(), sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!

Array.prototype.square = function square() {
  return this.map(x => x * x);
};

Array.prototype.cube = function cube() {
  return this.map(x => x * x * x);
};

Array.prototype.average = function average() {
  return this.reduce((a, b) => a + b, 0) / (this.length || NaN);
};

Array.prototype.sum = function sum() {
  return this.reduce((a, b) => a + b, 0);
};

Array.prototype.even = function even() {
  return this.filter(x => !(x % 2));
};

Array.prototype.odd = function odd() {
  return this.filter(x => x % 2);
};

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.square());
console.log(numbers.cube());
console.log(numbers.average());
console.log(numbers.sum());
console.log(numbers.even());
console.log(numbers.odd());
