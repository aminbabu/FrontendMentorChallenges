const forms = document.forms;
const buttons = [];

for (let i = 0; i < forms.length; i++) {
  buttons.push(forms[i].submitBtn);
}

buttons.forEach((button) => {
  button.addEventListener("click", formValidation);
});

function formValidation(event) {
  event.preventDefault();

  const inputField = event.target.parentElement.email;
  const email = inputField.value;
  const warningMessage = inputField.nextElementSibling;
  const isValid = validateEmail(email);

  if (!isValid) {
   inputField.classList.add("warning-border");
   warningMessage.classList.add("active-warning-message")
   return;
  } else {
    inputField.classList.remove("warning-border");
    warningMessage.classList.remove("active-warning-message")
    inputField.value = "";
  }
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
// Classes -
// warning-border
// active-warning-message
