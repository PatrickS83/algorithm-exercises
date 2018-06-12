// Intermediate Algorithm Scripting: Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  // I'm a steamroller, baby
  const result = arr.reduce((a,b) => a.concat(b), [])
  return result.every(x => !Array.isArray(x)) ? result : steamrollArray(result);
}

steamrollArray([1, [], [3, [[4]]]]);