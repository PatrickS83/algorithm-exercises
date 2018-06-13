// Intermediate Algorithm Scripting: Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects.
// The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

function truthCheck(collection, pre) {
  // Is everyone being true?
  const filtered = collection.filter(entry => entry[pre])
  return filtered.length === collection.length
}

truthCheck([
  {"user": "Tinky-Winky", "sex": "male"},
  {"user": "Dipsy", "sex": "male"},
  {"user": "Laa-Laa", "sex": "female"},
  {"user": "Po", "sex": "female"}
], "sex");