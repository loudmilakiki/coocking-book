// Данные рецептов
const recipes = {
  soups: [
    {
      name: "Борщ",
      img: "image/soup.jpg",
      text: "1. Нарезать овощи\n2. Добавить мясо\n3. Варить до готовности",
    },
    {
      name: "Солянка",
      img: "image/soup.jpg",
      text: "1. Нарезать колбасу\n2. Добавить огурцы\n3. Варить бульон",
    },
  ],
  baking: [
    {
      name: "Пирог с яблоками",
      img: "image/backing.jpg",
      text: "1. Замесить тесто\n2. Добавить яблоки\n3. Выпекать 40 минут",
    },
  ],
  salads: [
    {
      name: "Цезарь",
      img: "image/salads.jpg",
      text: "1. Нарезать салат\n2. Добавить курицу\n3. Полить соусом",
    },
  ],
  fish: [
    {
      name: "Запечённая рыба",
      img: "image/fish.jpg",
      text: "1. Почистить рыбу\n2. Добавить специи\n3. Запекать 20 минут",
    },
  ],
  meat: [
    {
      name: "Стейк",
      img: "image/meat.jpg",
      text: "1. Разогреть сковороду\n2. Обжарить мясо с обеих сторон",
    },
  ],
  marinades: [
    {
      name: "Куриный маринад",
      img: "image/marinades.jpg",
      text: "1. Смешать специи\n2. Замариновать курицу на 2 часа",
    },
  ],
  sauces: [
    {
      name: "Томатный соус",
      img: "image/souce.jpg",
      text: "1. Обжарить лук и чеснок\n2. Добавить томаты\n3. Варить 15 минут",
    },
  ],
  desserts: [
    {
      name: "Тирамису",
      img: "image/dessert.jpg",
      text: "1. Взбить сыр и сливки\n2. Пропитать бисквит\n3. Собрать десерт",
    },
  ],
};

// Получаем категорию из URL
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

// Заголовок категории
const categoryTitle = document.querySelector("#category-title");
categoryTitle.textContent = category ? `Рецепты: ${category}` : "Рецепты";

// Контейнер для карточек
const recepiContainer = document.querySelector("#recepi-container");

// Модалка
const modal = document.getElementById("recipe-modal");
const modalTitle = document.getElementById("recipe-title");
const modalText = document.getElementById("recipe-text");
const modalImg = document.getElementById("recipe-img");
const modalClose = document.getElementById("recipe-close");

// Функция открытия модалки
function openRecipeModal(recipe) {
  modalTitle.textContent = recipe.name;
  modalText.textContent = recipe.text;
  modalImg.src = recipe.img;
  modalImg.alt = recipe.name;
  modal.classList.add("show");
}

// Функция закрытия модалки
function closeModal() {
  modal.classList.remove("show");
}

// Закрытие по кнопке
modalClose.onclick = closeModal;

// Закрытие при клике вне контента
window.onclick = (e) => {
  if (e.target === modal) closeModal();
};

// Создание карточек
if (category && recipes[category]) {
  recipes[category].forEach((item) => {
    const card = document.createElement("div");
    card.className = "recepi-list__card";
    card.innerHTML = `<p class="recepi-card__name">${item.name}</p>`;
    card.addEventListener("click", () => openRecipeModal(item));
    recepiContainer.appendChild(card);
  });
} else {
  recepiContainer.innerHTML = "<p>Рецептов в этой категории пока нет.</p>";
}
