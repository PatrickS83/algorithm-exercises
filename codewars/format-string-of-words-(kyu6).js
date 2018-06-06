// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names,
// which should be separated by an ampersand.

function list(names) {
  return names.reduce((a, b, i) => {
    if (names.length === 1) return a + b.name;
    if (i < names.length - 2) return a + b.name + ', ';
    if (i < names.length - 1) return a + b.name + ' ';
    return a + '& ' + b.name;
  }, '');
}

list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]);
