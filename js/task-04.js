const valueEl = document.getElementById("value");
let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener("click", onClickDecrement);

function onClickDecrement() {
  counterValue -= 1;

  valueEl.textContent = counterValue;
}

incrementBtn.addEventListener("click", onClickIncrement);

function onClickIncrement() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
