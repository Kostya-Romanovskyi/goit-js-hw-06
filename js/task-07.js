const refs = {
  inputEl: document.getElementById("font-size-control"),
  textEl: document.getElementById("text"),
};

refs.inputEl.addEventListener("input", onChangeFontSize);
refs.textEl.style.fontSize = "56px";

function onChangeFontSize() {
  refs.textEl.style.fontSize = this.value + "px";
}
