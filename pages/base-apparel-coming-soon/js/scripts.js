function formValidation(evn) {
  evn.preventDefault();

  var emailAddress = document.getElementById("input-email").value;

  let errorMessage = document.querySelector('.email-group p');

  let errorIcon = document.getElementById('errorIcon');

  if (!emailAddress) {
    errorMessage.classList.add('email-validation-error');
    errorMessage.style.display = 'block';
    errorIcon.style.display = 'block';
    return;
  }

  if (!emailAddress.includes('@')) {
    errorMessage.classList.add('email-validation-error');
    errorMessage.style.display = 'block';
    errorIcon.style.display = 'block';
    return;
  }

  errorIcon.style.display = 'none';
  errorMessage.style.display = 'none';
  document.getElementById("input-email").value = '';
}

const submitBtn = document.querySelector('.email-group button[type="submit"]');
submitBtn.addEventListener("click", formValidation);
