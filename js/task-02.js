const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById("ingredients");

for (let i = 0; i < ingredients.length; i +=1) {
const listItem = document.createElement("li");
listItem.textContent = ingredients[i];
listItem.classList.add("item");
ingredientsList.appendChild(listItem);};