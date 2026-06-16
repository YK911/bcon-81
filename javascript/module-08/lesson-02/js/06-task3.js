/*
 * Необхідно зрoбити рефакторинг функції calculateHousePerimeter,
 * так щоб вона приймала об'єкт з параметрами будинку,
 * включаючи довжини сторін будинку.
 * Функція повинна розрахувати та повернути периметр будинку.
 */

function calculateHousePerimeter({ a, b, c, d } = {}) {
  return a + b + c + d;
}

const options = {
  a: 10,
  b: 15,
  c: 10,
  d: 15,
};

const perimeter = calculateHousePerimeter(options);
console.log(`Периметр будинку: ${perimeter}`);

const flatOptions = {
  a: 11,
  b: 25,
  c: 11,
  d: 25,
};
const flatPerimeter = calculateHousePerimeter(flatOptions);
console.log("🚀 ~ flatPerimeter:", flatPerimeter);
