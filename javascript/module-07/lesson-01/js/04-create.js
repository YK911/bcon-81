/*
 * Створення та додавання елементів
 */

/*
 * Створюємо заголовок
 */
const titleEl = document.createElement("h1");
titleEl.textContent = "Main title";
titleEl.classList.add("title");

console.log(titleEl);

/*
 * Створюємо зображення
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
const imageEl = document.createElement("img");
imageEl.src =
  "https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg";
imageEl.alt = "valais-alpine-mountains-glacier";
imageEl.width = 480;

console.log("🚀 ~ imageEl:", imageEl);

const heroEl = document.querySelector(".hero");
// heroEl.append(titleEl);
// heroEl.append(imageEl);
// heroEl.append(imageEl, titleEl);

// heroEl.prepend(imageEl);

// heroEl.after(titleEl);

/*
 * Створюємо та додаємо новий пункт меню
 */
// const navItemEl = document.createElement("li");
// navItemEl.classList.add("site-nav__item");

// const navLinkEl = document.createElement("a");
// navLinkEl.href = "/home";
// navLinkEl.textContent = "Home";
// navLinkEl.classList.add("site-nav__link");

// navItemEl.append(navLinkEl);
// console.log("🚀 ~ navItemEl:", navItemEl);

const navEl = document.querySelector(".site-nav");
// navEl.prepend(navItemEl);

const links = ["home", "about", "portfolio", "contacts"];

function renderLinks(links) {
  const linksMarkup = links.map((linkValue, idx) => {
    const elLi = document.createElement("li");
    elLi.classList.add("site-nav__item");
    const elA = document.createElement("a");
    elA.href = `/${linkValue}`;
    elA.textContent = `${linkValue[0].toUpperCase()}${linkValue.slice(1)}`;
    elA.classList.add("site-nav__link");

    elLi.append(elA);

    return elLi;
  });
  console.log("🚀 ~ renderLinks ~ linksMarkup:", linksMarkup); // []

  navEl.append(...linksMarkup);
}

renderLinks(links);
