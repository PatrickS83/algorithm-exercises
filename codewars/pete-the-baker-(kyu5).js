// Write a function cakes(), which takes the recipe (object) and the available ingredients
// (also an object) and returns the maximum number of cakes Pete can bake (integer).
// For simplicity there are no units for the amounts
// (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
// Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 0
// cakes(
//   {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100},
//   {sugar: 500, flour: 2000, milk: 2000}
// );

function cakes(recipe, available) {
  const recipeKeys = Object.keys(recipe);
  const availableKeys = Object.keys(available);
  const filter = recipeKeys.filter(ingredient =>
    availableKeys.includes(ingredient)
  );
  if (filter.length !== recipeKeys.length) return 0;

  const amount = recipeKeys.map(
    ingredient => available[ingredient] / recipe[ingredient]
  );
  return Math.floor(Math.min(...amount));
}
