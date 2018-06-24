// Description:
// Each exclamation mark weight is 2; Each question mark weight is 3. Put two string left and right to the balance, Are they balanced?

// If the left side is more heavy, return "Left"; If the right side is more heavy, return "Right"; If they are balanced, return "Balance".

// Examples
// balance("!!","??") === "Right"
// balance("!??","?!!") === "Left"
// balance("!?!!","?!?") === "Left"
// balance("!!???!????","??!!?!!!!!!!") === "Balance"

function balance(left, right) {
  const count = str => str.split('').reduce((a, b) => (b === '!' ? a + 2 : a + 3), 0);

  let answer = 'Balance';
  if (count(left) > count(right)) answer = 'Left';
  else if (count(left) < count(right)) answer = 'Right';
  return answer;
}

console.log(balance('!!???!????', '??!!?!!!!!!!'));
