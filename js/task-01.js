const mainList = document.querySelector("#categories");

const itemsLength = mainList.children.length;
console.log(`Number of categories: ${itemsLength}`);

const itemElements = document.querySelectorAll(".item");
itemElements.forEach((element) => {
  const itemTitleVar1 = element.firstElementChild.textContent;
  const itemListLengthVar1 = element.lastElementChild.children.length;

  console.log(`Category:${itemTitleVar1}`);
  console.log(`Elements:${itemListLengthVar1}`);
});

// const array = [...mainList.children];

// array.forEach((el) => {
//   const itemTitleTestVar2 = el.firstElementChild.textContent;
//   const itemListLengthTestVar2 = el.lastElementChild.children.length;
//   console.log(`Category:${itemTitleTestVar2}`);
//   console.log(`Elements:${itemListLengthTestVar2}`);
// });
