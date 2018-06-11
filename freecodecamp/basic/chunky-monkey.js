// Basic Algorithm Scripting: Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument)
//  and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  const result = [];
  const arrCopy = [...arr];
  while (arrCopy.length !== 0) {
    result.push(arrCopy.splice(0, size));
  }
  return result;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)