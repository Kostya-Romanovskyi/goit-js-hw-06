const mainList = document.getElementById("categories");

const itemsLength = mainList.children.length;
console.log(`Number of categories: ${itemsLength}`);

const itemTitle = mainList.querySelectorAll("h2");

const titleAnimals = itemTitle[0].textContent;
console.log(`Category: ${titleAnimals}`);

const howManyCategoris = mainList.querySelectorAll("ul");

const itemsQuantityAnimals = howManyCategoris[0].children.length;
console.log(`Elements: ${itemsQuantityAnimals}`);

const titleProducts = itemTitle[1].textContent;
console.log(`Category: ${titleProducts}`);

const itemsQuantityProducts = howManyCategoris[1].children.length;
console.log(`Elements: ${itemsQuantityProducts}`);

const titleTechnologies = itemTitle[2].textContent;
console.log(`Category: ${titleTechnologies}`);

const itemsQuantityTechnologies = howManyCategoris[2].children.length;
console.log(`Elements: ${itemsQuantityTechnologies}`);

// const itemEl = document.querySelectorAll(".item");

// const titleCategory = document.querySelector("h2").textContent;
// console.log(`Category: ${titleCategory}`);

// const subListEl = document.querySelector("ul");
// const howMatch = subListEl.children.length;
// console.log(`Elements: ${howMatch}`);

// const firstItemElAnimals = itemEl[0].firstElementChild.textContent;
// console.log(`Category: ${firstItemElAnimals}`);

// const lastItemElAnimals = itemEl[0].lastElementChild.children.length;
// console.log(`Elements: ${lastItemElAnimals}`);

// const firstItemElProducts = itemEl[1].firstElementChild.textContent;
// console.log(`Category: ${firstItemElProducts}`);

// const lastItemElProducts = itemEl[1].lastElementChild.children.length;
// console.log(`Elements: ${lastItemElProducts}`);

// const firstItemElTechnologies = itemEl[2].firstElementChild.textContent;
// console.log(`Category: ${firstItemElTechnologies}`);

// const lastItemElTechnologies = itemEl[2].lastElementChild.children.length;
// console.log(`Elements: ${lastItemElTechnologies}`);
