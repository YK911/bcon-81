/*
 * //! Додавання слухача події на кожен елемент
 *
 * Отримай колір квадратика по якому було здійснено клік
 */

const container = document.querySelector(".container");
const output = document.querySelector(".output");

// const boxesEl = [...container.children];
// boxesEl.forEach(box => {
//   box.addEventListener("click", event => {
//     const boxColor = event.target.dataset.color;
//     console.log("🚀 ~ boxColor:", boxColor);

//     output.textContent = boxColor;
//   });
// });
/*
 * //? Дегегування подій
 *
 * Отримай колір квадратика по якому було здійснено клік
 */
container.addEventListener("click", event => {
  const isBoxEl = event.target.classList.contains("box");

  if (!isBoxEl) {
    alert("Missclick");
    return;
  }

  const color = event.target.dataset.color;
  console.log("🚀 ~ color:", color);
  output.textContent = color;
});
