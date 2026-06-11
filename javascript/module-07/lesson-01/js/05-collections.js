/*
 * Створюємо та додаємо колекцію
 */
const options = [
  { label: "червоний", color: "#F44336" },
  { label: "зелений", color: "#4CAF50" },
  { label: "синій", color: "#2196F3" },
  { label: "сірий", color: "#607D8B" },
  { label: "рожевий", color: "#E91E63" },
  { label: "індіго", color: "#3F51B5" },
];

const colorPickerContainerEl = document.querySelector(".js-color-picker");

/*
 * Пишемо функцію для створення розмітки колорпікера
 */

function createColorPickerMarkup(options) {
  return options.map(option => {
    const btnEl = document.createElement("button");
    btnEl.textContent = option.label;
    btnEl.style.backgroundColor = option.color;
    btnEl.style.color = "#fff";
    btnEl.style.margin = "8px";

    btnEl.style.cursor = "pointer";

    return btnEl;
  });
}

const markup = createColorPickerMarkup(options);
console.log("🚀 ~ markup:", markup);

colorPickerContainerEl.append(...markup);
