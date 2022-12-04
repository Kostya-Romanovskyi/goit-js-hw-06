const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const mainListEl = document.getElementById("ingredients");

const potatoesItemEl = document.createElement("li");
potatoesItemEl.textContent = ingredients[0];
potatoesItemEl.classList.add("item");

const mushroomsItemEl = document.createElement("li");
mushroomsItemEl.textContent = ingredients[1];
mushroomsItemEl.classList.add("item");

const garlicItemEl = document.createElement("li");
garlicItemEl.textContent = ingredients[2];
garlicItemEl.classList.add("item");

const tomatosItemEl = document.createElement("li");
tomatosItemEl.textContent = ingredients[3];
tomatosItemEl.classList.add("item");

const herbsItemEl = document.createElement("li");
herbsItemEl.textContent = ingredients[4];
herbsItemEl.classList.add("item");

const condimentsItemEl = document.createElement("li");
condimentsItemEl.textContent = ingredients[5];
condimentsItemEl.classList.add("item");

mainListEl.append(
  potatoesItemEl,
  mushroomsItemEl,
  garlicItemEl,
  tomatosItemEl,
  herbsItemEl,
  condimentsItemEl
);
