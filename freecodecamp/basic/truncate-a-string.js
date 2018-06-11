// Basic Algorithm Scripting: Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.

function truncateString(str, num) {
  if (str.length <= num) return str;
  return str
    .split('')
    .slice(0, num)
    .join('')
    + '...';
}

truncateString("A-tiskets a-tasket A green and yellow basket", 12);