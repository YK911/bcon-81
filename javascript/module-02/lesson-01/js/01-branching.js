/**
 * Розгалуження
 *
 * - Інструкція if
 * - Інструкція if...else
 * - Блок else...if
 * - Тернарний оператор
 */
// debugger;
// console.log("Before");

// const age = 8;

// if (age > 18) {
//   console.log("Show data inside if statement");
// }

// console.log("After");
const CHECK_INPUT_LENGTH = 10;
const fieldValue = username.value;

// if (CHECK_INPUT_LENGTH > fieldValue.length) {
//   error.classList.add("show");
// }

const isValid = CHECK_INPUT_LENGTH < fieldValue.length;

if (isValid) {
  username.classList.add("valid");
} else {
  username.classList.add("invalid");
}

/**
 * -----------------------------
 */

const points = 1500;

// if (points <= 500) {
//   console.log("Level 1");
// } else if (points <= 1000) {
//   console.log("Level 2");
// } else if (points <= 2000) {
//   console.log("Level 3");
// } else if (points <= 4000) {
//   console.log("Level 4");
// } else {
//   console.log("Max Level");
// }

/**
 * -----------------------------
 */
// debugger;
const balance = 1000;
let message; // undefined

// if (balance >= 0) {
//   message = "Positive";
// } else {
//   message = "Negative";
// }

message = balance >= 0 ? "Positive" : "Negative";
console.log(message);

const result =
  points <= 500
    ? "Level 1"
    : points <= 1000
      ? "Level 2"
      : points <= 2000
        ? "Level 3"
        : points <= 4000
          ? "Level 4"
          : "Max Level";

console.log("🚀 ~ result:", result);
