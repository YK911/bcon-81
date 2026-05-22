/**
 * Функції
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 */

function renderImage(imgUrl, width, height, altText) {
  // let imgUrl = undefined
  // let width = undefined
  // let height = undefined
  // let alt = undefined

  const imageMarkup = `<img src="${imgUrl}" alt="${altText}" width="${width}" height="${height}" />`;
  console.log(imageMarkup);

  document.body.innerHTML += imageMarkup;

  // return undefined
}

//* Виклик функції 1 (запуск коду із функції)
// const result = renderImage(
//   "https://images.pexels.com/photos/4961908/pexels-photo-4961908.jpeg",
//   300,
//   200,
//   "Cute cat"
// );

const imageCoffee =
  "https://images.pexels.com/photos/27860686/pexels-photo-27860686.jpeg";
const imageCoffeeAltText =
  "A beautifully crafted cappuccino with intricate latte art on a rustic wooden table in Jammu";

//* Виклик функції 2 (запуск коду із функції)
// renderImage(imageCoffee, 150, 200, imageCoffeeAltText);

function multiply(a, b) {
  return a * b;
  // const result = a * b;
  // return result;
  // return undefined
}

// const updateCounter = 10 + multiply(111, 222);
// const updateCounter = 100 + multiply(111, 222);
// const updateCounter = 1000 + multiply(111, 222);
// const updateCounter = 10000 + multiply(111, 222);

function fnA() {
  console.log(4 + 5);

  fnB();
}
function fnB() {
  console.log("JavaScript is awesome 🤩");

  fnC();
}
function fnC() {
  return "Working!";
}

// debugger;
// console.log("Before fnA execution");
// fnA();
// console.log("After fnA execution");

// console.log("Before fnB execution");
// fnB();
// console.log("After fnB execution");

// console.log("Before fnC execution");
// fnC();
// console.log("After fnC execution");

/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7 - тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */
function calcBMI(weight = "", height = "") {
  const normalizedWeight = weight.replace(",", ".");
  const normalizedHeight = height.replace(",", ".");

  const numberWeight = convertToNumber(normalizedWeight);
  const numberHeight = convertToNumber(normalizedHeight);

  const indexBMI = numberWeight / numberHeight ** 2;

  return +indexBMI.toFixed(1);
}

function convertToNumber(value) {
  return Number.parseFloat(value);
}

const bmi = calcBMI("88,3", "1.75");
console.log(bmi); // 28.8
