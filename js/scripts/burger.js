const burgerBtn = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");

burgerBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});
