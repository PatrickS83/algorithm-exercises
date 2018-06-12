// Intermediate Algorithm Scripting: Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  const html = new Map([
    ['&', "&​amp;"],
    ['<', "&​lt;"],
    ['>', "&​gt;"],
    ['"', "&​quot;"],
    ["'", "&​apos;"]
  ]);

  return str
    .split('')
    .map(char => html.get(char) || char)
    .join('');
}

convertHTML("Dolce & Gabbana");