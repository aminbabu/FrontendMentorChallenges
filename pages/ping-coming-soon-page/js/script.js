const form = document.forms.newletter;
const email = form.elements.email;
const validationAlert = email.nextElementSibling;
const submitBtn = form.elements.submitBtn;

email.addEventListener("input", () => {
  let emailAddress = email.value;
  if (emailAddress === null || emailAddress === "") {
    validationAlert.innerText =
      "Whoops! It looks like you forgot to add your email";
    validationAlert.classList.add("wrong-email");
    email.classList.add("wrong-email-border");
  } else {
    validationAlert.classList.remove("wrong-email");
    email.classList.remove("wrong-email-border");
  }
});

submitBtn.addEventListener("click", emailValidation);

function emailValidation(event) {
  // prevents all default envent for form
  event.preventDefault();

  let emailValue = email.value;
  // takes dicision validateEmail() that email is valid or not
  const validEmail = validateEmail(emailValue);

  if (!validEmail) {
    // if not valid then,
    validationAlert.classList.add("wrong-email");
    email.classList.add("wrong-email-border");
    return;
  } else {
    // if valid then,
    validationAlert.classList.remove("wrong-email");
    email.classList.remove("wrong-email-border");
  }

  email.value = "";
  successMessage();
}

// check valid email structure using regex.
function validateEmail(email) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email); // returns boolen
}

function successMessage() {
  const notification = document.getElementsByClassName(
    "success-notification"
  )[0];

  notification.classList.add("active-success-notification");

  setTimeout(() => {
    notification.classList.remove("active-success-notification");
  }, 2500);
}
