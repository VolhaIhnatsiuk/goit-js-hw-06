const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientslist = document.querySelector('#ingredients');

const ingredientItem = ingredients.map((ingredient) => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('js-item')
  return item;
})
  
ingredientslist.append(...ingredientItem);

// console.dir(ingredientslist);