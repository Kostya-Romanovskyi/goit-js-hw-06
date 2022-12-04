const refs = {
  inputNameEl: document.getElementById("name-input"),
  outputNameEl: document.getElementById("name-output"),
};

refs.inputNameEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.outputNameEl.textContent = event.currentTarget.value;

  if (refs.outputNameEl.textContent === "") {
    refs.outputNameEl.textContent = "Anonymous";
  }
}
