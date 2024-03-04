const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById("ingredients");

const items = ingredients.map((item) => {
const listItem = document.createElement("li");
listItem.textContent = item;
listItem.classList.add("item");
return listItem });

ingredientsList.append(...items)