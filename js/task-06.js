const validInput = document.querySelector("input[data-length='6']");

validInput.addEventListener("blur", onValidLength);

function onValidLength(event) {
  if (event.currentTarget.value.length === 6) {
    validInput.classList.add("valid");
  }
  if (
    event.currentTarget.value.length > 6 ||
    event.currentTarget.value.length < 6
  ) {
    validInput.classList.remove("valid");
  }
  if (
    event.currentTarget.value.length > 6 ||
    event.currentTarget.value.length < 6
  ) {
    validInput.classList.add("invalid");
  }
  if (event.currentTarget.value.length === 6) {
    validInput.classList.remove("invalid");
  }
}

// function onValidLength(event) {
//   if (event.currentTarget.value.length <= 6) {
//     validInput.classList.add("valid");
//   }
//   if (event.currentTarget.value.length > 6) {
//     validInput.classList.remove("valid");
//   }
//   if (event.currentTarget.value.length >= 7) {
//     validInput.classList.add("invalid");
//   }
//   if (event.currentTarget.value.length < 6) {
//     validInput.classList.remove("invalid");
//   }
// }
