const controlsEl = document.getElementById("controls");
const boxesEl = document.getElementById("boxes");

const createBtn = document.querySelector("button[data-create]");
const removeBtn = document.querySelector("button[data-destroy]");

createBtn.addEventListener("click", createBoxes);
removeBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const inputValue = controlsEl.firstElementChild.value;

  let sizeWidth = 20;
  let sizeHeight = 20;

  for (let i = 1; i <= inputValue; i += 1) {
    sizeWidth += 10;
    sizeHeight += 10;

    const blocks = document.createElement("div");

    blocks.style.width = `${sizeWidth}px`;
    blocks.style.height = `${sizeHeight}px`;
    blocks.style.backgroundColor = getRandomHexColor();

    boxesEl.append(blocks);

    controlsEl.firstElementChild.value = "";
  }
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
  controlsEl.firstElementChild.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
