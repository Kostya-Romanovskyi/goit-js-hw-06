const validInput = document.querySelector("input[data-length='6']");

validInput.addEventListener("blur", onValidLength);

function onValidLength(event) {
  if (event.currentTarget.value.length === Number(validInput.dataset.length)) {
    validInput.classList.add("valid"), validInput.classList.remove("invalid");
  } else {
    validInput.classList.remove("valid"), validInput.classList.add("invalid");
  }
}
