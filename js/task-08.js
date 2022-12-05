const form = document.querySelector(".login-form");

form.addEventListener("submit", onAlertMessage);

function onAlertMessage(event) {
  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === "" || password === "") {
    alert("Всі поля повинні бути заповнені");
    return;
  }

  const formData = {
    email,
    password,
  };
  console.log(formData);

  event.preventDefault();
  form.reset();
}
