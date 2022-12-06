const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const mainListEl = document.getElementById("ingredients");

const arrayProducts = ingredients.map((ingredient) => {
  const itemElement = document.createElement("li");

  itemElement.textContent = ingredient;
  itemElement.classList.add("item");

  return itemElement;
});

mainListEl.append(...arrayProducts);
