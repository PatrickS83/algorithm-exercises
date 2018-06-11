// Basic Algorithm Scripting: Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
  return str
    .split(' ')
    .map(word => word.length)
    .sort((a, b) => a - b)
    .pop();
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
