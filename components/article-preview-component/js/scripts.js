const shareButton = document.getElementsByClassName("share-btn")[0];
const alert = document.getElementsByClassName("alert")[0];

shareButton.addEventListener("click", showAlert);

function showAlert() {
  activeShareButton();

  if (innerWidth <= 992) {
    alert.classList.toggle("mobile-alert-show");
  } else {
    alert.classList.toggle("mobile-alert-show");
    alert.classList.toggle("desktop-alert");
  }
}

function activeShareButton() {
  const shareIcon = document.getElementsByClassName("share-icon")[0];

  shareButton.classList.toggle("active-share-btn");
  shareIcon.classList.toggle("active-share-icon");
}
