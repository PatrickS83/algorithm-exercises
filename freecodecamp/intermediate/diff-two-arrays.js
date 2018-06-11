// Intermediate Algorithm Scripting: Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
// In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  const arr1unique = arr1.filter(num => !arr2.includes(num));
  const arr2unique = arr2.filter(num => !arr1.includes(num));
  return [...arr1unique, ...arr2unique];
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);