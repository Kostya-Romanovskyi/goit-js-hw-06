const colorName = document.querySelector(".color");
const colorChangeBtn = document.querySelector(".change-color");

colorChangeBtn.addEventListener("click", onChangeBgAndName);

function onChangeBgAndName() {
  document.body.style.backgroundColor = getRandomHexColor();

  colorName.textContent = document.body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
