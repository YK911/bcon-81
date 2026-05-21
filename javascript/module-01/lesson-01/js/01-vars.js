/**
 * Змінні та типи даних
 *
 * - Оголошення змінних з let і const
 * - Перевизначення значення
 * - Найменування змінних
 * - Вибір між const і let
 * - Числа, рядки, булі, null, undefined
 * - Оператор typeof
 */

// let manager = "Poly";

// manager = "Ajax";

// manager = 111;

// console.log("🚀 ~ manager:", manager);

// const isOnline = true;

// const totalCartSum = 1000;

// console.log("🚀 ~ isOnline:", isOnline);

// 111;

// const username = "Mango";
// console.log("🚀 ~ username:", username);

const userInput = testText.value;
console.log("🚀 ~ userInput:", userInput);

text.textContent = userInput;

const number = 222;
console.log("🚀 ~ number:", number);
const floatNumber = 222.111;
console.log("🚀 ~ floatNumber:", floatNumber);
const negativeNumber = -222;
console.log("🚀 ~ negativeNumber:", negativeNumber);
console.log("🚀 ~ -Infinity:", typeof -Infinity);
console.log("🚀 ~ NaN:", typeof NaN);

const string = "222";
const stringSigleQuote = "222";
// const string = String(222);

console.log("🚀 ~ string:", typeof string);
console.log("🚀 ~ stringSigleQuote:", stringSigleQuote);

const isEmpty = false;
console.log("🚀 ~ isEmpty:", typeof isEmpty);

let model;
console.log("🚀 ~ model:", typeof model);

const userProfile = null; // { name: "", age: 0, email: "", phoneNumber: "" }
console.log("🚀 ~ userProfile:", typeof userProfile);
