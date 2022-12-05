const validInput = document.querySelector("input[data-length='6']");

validInput.addEventListener("blur", onValidLength);

function onValidLength(event) {
  if (event.currentTarget.value.length === Number(validInput.dataset.length)) {
    validInput.classList.add("valid");
  }
  if (
    event.currentTarget.value.length > Number(validInput.dataset.length) ||
    event.currentTarget.value.length < Number(validInput.dataset.length)
  ) {
    validInput.classList.remove("valid");
  }
  if (
    event.currentTarget.value.length > Number(validInput.dataset.length) ||
    event.currentTarget.value.length < Number(validInput.dataset.length)
  ) {
    validInput.classList.add("invalid");
  }
  if (event.currentTarget.value.length === Number(validInput.dataset.length)) {
    validInput.classList.remove("invalid");
  }
}
