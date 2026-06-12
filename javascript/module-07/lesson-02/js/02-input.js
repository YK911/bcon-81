/**
 * - Подія input
 * - Подія blur
 *
 * Виводь в консоль все що користувач вводить в input
 */

const userName = document.querySelector(".js-user-name");
const outputEl = document.querySelector(".js-output");
const alertEl = document.querySelector(".js-alert");

userName.addEventListener("input", event => {
  const inputValue = event.target.value;

  if (inputValue.trim().length === 0) {
    alert("Please, fill input");
  }
  if (inputValue.trim().length < 3) {
    alertEl.classList.add("show");
  } else {
    alertEl.classList.remove("show");
  }

  outputEl.textContent = event.target.value;
});

/**
 * Користувач вводить в input своє ім'я після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */
userName.addEventListener("blur", event => {
  //   console.log("Fire when input lost focus");
  // alert(`Hello user: ${event.target.value}`);
  const inputValue = event.target.value;

  event.target.value = "";
});
