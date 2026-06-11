/*
 * Властивості елемента (hero)
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

const imageEl = document.querySelector(".hero__image");
// console.log("🚀 ~ imageEl:", imageEl.src)

// setTimeout(() => {
//     imageEl.src = 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480'

//     imageEl.width = 480
// }, 2000);

// console.log("🚀 ~ imageEl:", imageEl.alt)
// console.log("🚀 ~ imageEl:", imageEl.width)

const heroTitleEl = document.querySelector(".hero__title");
// console.log("🚀 ~ heroTitleEl:", heroTitleEl.textContent)
// heroTitleEl.textContent = "This is <span class='accent'>about</span> me title"
// console.log("🚀 ~ heroTitleEl:", heroTitleEl.innerHTML)
// heroTitleEl.innerHTML = "This is <span class='accent'>about</span> me title"

const inputEl = document.querySelector(".js-input");
// console.log("🚀 ~ inputEl:", inputEl.value);
const checkboxEl = document.querySelector(".js-checkbox");
// console.log("🚀 ~ checkboxEl:", checkboxEl.value);
// console.log("🚀 ~ checkboxEl:", checkboxEl.checked);
checkboxEl.checked = false;
// console.log("🚀 ~ checkboxEl:", checkboxEl.name);

/*
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */

const btnEl = document.querySelector("[data-action]");
// console.log("🚀 ~ btnEl:", btnEl)
const titleAttr = btnEl.getAttribute("title");
// console.log("🚀 ~ titleAttr:", titleAttr);
const typeAttr = btnEl.getAttribute("type");
// console.log("🚀 ~ typeAttr:", typeAttr);
const classAttr = btnEl.getAttribute("class");
// console.log("🚀 ~ classAttr:", classAttr);

if (!classAttr) {
  btnEl.setAttribute("class", "magic-btn");
}
const res = btnEl.hasAttribute("type");
// console.log("🚀 ~ res:", res);
// console.log(btnEl.attributes);
// btnEl.removeAttribute("style");

/*
 * Data-атрибути
 */
const boxesEl = document.querySelector(".boxes");
const actions = document.querySelectorAll(".actions button");
console.log("🚀 ~ actions:", actions);

actions.forEach(btn => {
  btn.onclick = event => {
    const btnAction = event.target.dataset.action;
    console.log("🚀 ~ btnAction:", btnAction);

    switch (btnAction) {
      case "add":
        create();
        break;

      case "remove":
        remove();
        break;

      case "edit":
        break;

      default:
        break;
    }
  };
});

function create() {
  const boxEl = '<div class="box"></div>';
  boxesEl.innerHTML += boxEl;
}

function remove() {
  if (boxesEl.children.length > 0) {
    const elems = [...boxesEl.children];
    elems.pop();

    boxesEl.innerHTML = "";
    boxesEl.append(...elems);
  }
}
