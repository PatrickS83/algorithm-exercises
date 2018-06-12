// Intermediate Algorithm Scripting: Pig Latin
// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word,
// moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const index = str.split('').findIndex(x => vowels.includes(x))
  if (index === -1) return str + 'ay' // no vowels in word
  if (index === 0) return str + 'way'; // word starts with a vowel
  return str.slice(index) + str.slice(0, index) + 'ay'; // usual case
}

translatePigLatin("hhhhhhds");