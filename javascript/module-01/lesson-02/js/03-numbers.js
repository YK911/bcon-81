/**
 * Арифметичні функції
 *
 * - Number.parseInt
 * - Number.parseFloat
 * - Math
 */

let elementWidth = "50px";
elementWidth = Number.parseInt(elementWidth); // 50
// console.log("elementWidth: ", elementWidth);

let elementHeight = "200.74px";
elementHeight = Number.parseFloat(elementHeight);
// console.log("elementHeight: ", elementHeight);

/**
 * Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д.
 * значення змінної value. Використовуй методи Math.floor(), Math.ceil()
 * та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.
 */

let value = 27.5;

// value = Math.ceil(value);
// value = Math.floor(value);
// value = Math.round(value);
// console.log("🚀 ~ value:", value);

const time = 72;

const hours = Math.floor(time / 60);
const minutes = time % 60;
console.log("🚀 ~ hours:", hours);
console.log("🚀 ~ minutes:", minutes);

const result = `Current time: ${hours}:${minutes}`;
console.log("🚀 ~ result:", result);

function round(number, decimal = 0) {
  return Math.round(number * 10 ** decimal) / 10 ** decimal;
}

const res1 = round(0.333333, 1);
// console.log("🚀 ~ res1:", res1);

const res2 = round(0.333333, 3);
// console.log("🚀 ~ res2:", res2);

const res3 = round(0.333333);
// console.log("🚀 ~ res3:", res3);
