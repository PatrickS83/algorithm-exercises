// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words.
// You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

function anagrams(word, words) {
  const sortedWords = words.map(x =>
    x
      .split('')
      .sort()
      .join('')
  );

  const sortedWord = word
    .split('')
    .sort()
    .join('');

  const indexes = sortedWords.reduce((a, currentWord, i) => {
    if (currentWord === sortedWord) a.push(i);
    return a;
  }, []);

  return words.filter((x, i) => indexes.includes(i));
}

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
