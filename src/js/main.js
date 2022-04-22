console.log("%c ¯\\_(ツ)_/¯", "font-size: 2rem");

let currentPath = window.location.href;
let navLinks = document.querySelectorAll(".nav-list a");

navLinks.forEach(function (element) {
  if (element.href == currentPath) {
    element.classList.add("active");
  }
});