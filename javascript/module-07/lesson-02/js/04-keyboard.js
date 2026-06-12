/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */
// document.addEventListener("keyup", event => {
//   console.log("🚀 ~ keyup event:", event);
// });

// document.addEventListener("keydown", event => {
//   console.log("🚀 ~ keydown event:", event);
// });

/*
 * Обробка комбінацій клавіш
 */
document.addEventListener("keydown", event => {
  event.preventDefault();

  if (event.code === "KeyF" && event.metaKey) {
    document.body.style.backgroundColor = randomHexColor();
  }
});

function randomHexColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
}
