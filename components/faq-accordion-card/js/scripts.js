const tabs = document.getElementsByClassName("tab");

for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", accordion);
}

function accordion() {
  const arrow = this.children[0];
  const element = this.nextElementSibling;

  if (this.classList.contains("active-tab")) {
    this.classList.remove("active-tab");
    arrow.classList.remove("active-arrow-image");
    console.log("tab success");
  } else {
    // removes active tabs color and arrow position
    resetTabStyle();
    // adds active tab color
    this.classList.add("active-tab");

    // adds active tab arrow effect
    arrow.classList.add("active-arrow-image");

    // hide all tab contents
    hideTabContents();
  }

  if (element.classList.contains("hide-tab-content")) {
    // hide tab contents
    element.classList.remove("hide-tab-content");
  } else {
    // show active tab contents
    element.classList.add("hide-tab-content");
  }

}

function hideTabContents() {
  let tabContents = document.getElementsByClassName("tab-content");

  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.add("hide-tab-content");
  }
}
hideTabContents();

function resetTabStyle() {
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active-tab");
    tabs[i].children[0].classList.remove("active-arrow-image");
  }
}
