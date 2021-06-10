// defines form submit button
const submitBtn = document.getElementsByClassName("submit-button")[0];

// defines all form input fields
const inputFields = document.getElementsByClassName("input-feild");

// loops through each iput fiels
for (let i = 0; i < inputFields.length; i++) {
  inputFields[i].addEventListener("input", () => {
    checkInputValidation(inputFields[i]);
  });
}

// adds click event to form submit button
submitBtn.addEventListener("click", formValidation);

// master form validation function
function formValidation(event) {
  let validInput, validEmail;
  event.preventDefault();

  // adds button animaton to submit button
  animateBtn();

  // check form input validation
  for (let i = 0; i < inputFields.length; i++) {
    validInput = checkInputValidation(inputFields[i]);
  }

  // checks email address validation
  validEmail = emailValidation();

  if (validInput && validEmail) {
    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].value = "";
    }
  }
}

// form submit button animation function
function animateBtn() {
  submitBtn.classList.add("active-submit-button");

  setTimeout(() => {
    submitBtn.classList.remove("active-submit-button");
  }, 100);
}

// all input validation checking function
function checkInputValidation(input) {
  let inputValue = input.value;
  let emptyValue = inputValue === null || inputValue === "";
  let errorIcon = input.nextElementSibling;
  let errorMessage = input.parentElement.lastElementChild;

  if (!emptyValue) {
    // if valid then,
    input.classList.remove("wrong-input")
    errorIcon.classList.remove("active-error-icon");
    errorMessage.classList.remove("active-error-alert");
    return true;
  } else {
    // if not valid then,
    input.classList.add("wrong-input")
    errorIcon.classList.add("active-error-icon");
    errorMessage.classList.add("active-error-alert");
    return false;
  }
}

// only email validation checking function
function emailValidation() {
  const email = document.forms["newsletterForm"].emailAddress;
  const emailValue = email.value;
  const errorIcon = email.nextElementSibling;
  const errorMessage = email.parentElement.lastElementChild;
  // takes dicision validateEmail() that email is valid or not
  const validEmail = validateEmail(emailValue);

  if (!validEmail) {
    // if not valid then,
    errorIcon.classList.add("active-error-icon");
    errorMessage.classList.add("active-error-alert");
    return false;
  } else {
    // if valid then,
    errorIcon.classList.remove("active-error-icon");
    errorMessage.classList.remove("active-error-alert");
    return true;
  }
}

// check valid email structure using regex.
function validateEmail(email) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email); // returns boolen
}