// Intermediate Algorithm Scripting: Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided,
// then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

function addTogether() {
  const [num1, num2] = [...arguments]

  const sumTwo = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    return undefined;
  }

  if (typeof num1 !== 'number') return undefined;

  // case for two arguments
  if (num2 !== undefined) return sumTwo(num1, num2);

  // case for one arguments
  return function(num2) {
    return sumTwo(num1, num2);
  }
}

addTogether(2)(3);
addTogether(2, 3);
addTogether("2");