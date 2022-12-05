const controlsEl = document.getElementById("controls");
const boxesEl = document.getElementById("boxes");

const createBtn = document.querySelector("button[data-create]");
const removeBtn = document.querySelector("button[data-destroy]");

createBtn.addEventListener("click", createBoxes);
removeBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const inputValue = controlsEl.firstElementChild.value;
  for (let i = 1; i <= inputValue; i += 1) {
    const blocks = document.createElement("div");

    blocks.style.width = "30px";
    blocks.style.height = "30px";
    blocks.style.backgroundColor = getRandomHexColor();

    boxesEl.append(blocks);
  }
}

function destroyBoxes() {
  while (boxesEl.firstChild) {
    boxesEl.removeChild(boxesEl.firstChild);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
