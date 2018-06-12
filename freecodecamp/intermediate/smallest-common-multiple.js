// Intermediate Algorithm Scripting: Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both,
// as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3
// that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
  const numbers = [];
  // create array filled with numbers in given range
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++)
    numbers.push(i);

  // calculate gcd required for formula to calculate scm
  function gcd(num1, num2) {
    let low = Math.min(num1, num2);
    let high = Math.max(num1, num2);
    while(true) {
      let remainder = high % low
      if(remainder === 0) return low
      else {
        high = low;
        low = remainder
      }
    }
  }

  // calculating the scm || a * b / gcd(a, b)
  return numbers.reduce((acc, curr, i) => {
    if (i < numbers.length - 1) return acc * numbers[i+1] / gcd(acc, numbers[i+1])
    else return acc
  }, numbers[0])
}


smallestCommons([23,18]);