const menuCta = document.querySelector(".navbar-menu-cta");
const menu = document.querySelector(".navbar-menu");

menuCta.addEventListener("click", function () {
  menuCta.classList.toggle("is-active");
  menu.classList.toggle("active");
});

/*const menu = document.querySelector(".navbar-menu");

function menuCtaActive() {
  let menuCta = document.querySelector(".navbar-menu-cta");
  menuCta.classList.toggle("is-active");
}*/
