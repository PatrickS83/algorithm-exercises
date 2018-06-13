// Write a function battle(player1, player2) that takes in 2 arrays of creatures.
// Each players' creatures battle each other in order (player1[0] battles the creature in player2[0]) and so on.
// If one list of creatures is longer than the other, those creatures are considered unblocked, and do not battle.

// Your function should return an object (a hash in Ruby) with the keys player1 and player2 that contain the power and
// toughness of the surviving creatures.

// Example:

// player1 = [[1, 1], [2, 1], [2, 2], [5, 5]];
// player2 = [[1, 2], [1, 2], [3, 3]];
// battle(player1, player2) ->
// { 'player1': [[5, 5]],
//   'player2': [[1, 2], [3, 3]] }

function battle(player1, player2) {
  const filterCards = (playA, playB) =>
    playA.filter(([attack, defense], i) => (playB[i] ? defense > playB[i][0] : [attack, defense]));

  return {
    player1: filterCards(player1, player2),
    player2: filterCards(player2, player1)
  };
}

player1 = [[1, 1], [2, 1], [2, 2], [5, 5]];
player2 = [[1, 2], [1, 2], [3, 3]];
battle(player1, player2);
