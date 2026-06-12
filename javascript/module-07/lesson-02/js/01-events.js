/**
 * Подія сlick
 *
 * Натискаючи на кнопку "Click me" змусь
 * червоний квадратик зміщуватись на 50px по діагоналі
 */

// const clickMeBtn = document.querySelector(".js-click");
// const removeBtn = document.querySelector(".js-remove");
// const linkEl = document.querySelector(".js-link");

// linkEl.addEventListener("click", event => {
//   event.preventDefault();
//   console.log("Ha-ha!");
// });

// clickMeBtn.addEventListener("click", btnHandler);

// clickMeBtn.addEventListener("mouseenter", () => {
//   console.log("When mouse hover over the button 😲");
// });

// function btnHandler() {
//   console.log("Second button callback function 😎");
// }

// const handleBtnClick = () => {
//   console.log("First button callback function 😎");
// };

// clickMeBtn.addEventListener("click", handleBtnClick);

// // ? Remove listeners
// removeBtn.addEventListener("click", () => {
//   clickMeBtn.removeEventListener("click", handleBtnClick);
// });

const btnEl = document.querySelector(".js-click");
const boxEl = document.querySelector(".js-box");
let position = 0;
const move = 50;

btnEl.addEventListener("click", onBtnClick);

function onBtnClick() {
  position += move;
  boxEl.style.transform = `translate(${position}px, ${position}px)`;
}
