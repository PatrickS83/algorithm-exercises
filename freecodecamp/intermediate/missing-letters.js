// Intermediate Algorithm Scripting: Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  const charCode = str
    .split('')
    .map(letter => letter.charCodeAt(0))
    .find((charCode, i, arr) => charCode + 1 !== arr[i + 1])

  if (charCode === str.charCodeAt(str.length - 1)) return undefined; // no missing letter
  return String.fromCharCode(charCode + 1);
}

fearNotLetter("abcde");