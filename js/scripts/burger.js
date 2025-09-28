const burgerBtn = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");

burgerBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// Закрыть меню при клике вне его
window.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !burgerBtn.contains(e.target)) {
    menu.classList.remove("show");
  }
});
