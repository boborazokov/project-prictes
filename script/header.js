document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const navUl = document.querySelector("nav ul");

  burgerMenu.addEventListener("click", function () {
    navUl.classList.toggle("show");
  });
});
