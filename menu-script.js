const menuCta = document.querySelector(".navbar-menu-cta");
const menu = document.querySelector(".navbar-menu");

menuCta.addEventListener("click", function () {
  menuCta.classList.toggle("is-active");
  menu.classList.toggle("active");
});
