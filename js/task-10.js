const controlsEl = document.getElementById("controls");
const boxesEl = document.getElementById("boxes");

const createBtn = document.querySelector("button[data-create]");
// createBtn.dataset.value = Number(amount);

// amount = controlsEl.firstElementChild.value;

createBtn.addEventListener("click", createBoxes);
// controlsEl.children[1].addEventListener("click", createBoxes);
const collections = [];
console.log(collections);

function createBoxes(amount) {
  const block = document.createElement("div");
  block.style.width = "30px";
  block.style.height = "30px";
  block.style.backgroundColor = getRandomHexColor();
  collections.push(block);

  console.log((amount = controlsEl.firstElementChild.value));

  boxesEl.appendChild(block);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
