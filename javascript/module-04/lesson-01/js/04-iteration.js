/*
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

// for (const key in feedback) {
//   console.log("🚀 ~ key:", key);
//   console.log("🚀 ~ value:", feedback[key]);
// }

// console.log("🚀 ~ good in feedback:", "good" in feedback);

let totalFeedback = 0;
// for (const key in feedback) {
//   console.log("🚀 ~ value:", feedback[key]);
//   totalFeedback += feedback[key];
// }
// console.log("totalFeedback: ", totalFeedback);

/**
 * ---------------------------------
 */
const keys = Object.keys(feedback);
console.log("🚀 ~ keys:", keys);

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);
//   totalFeedback += feedback[key];
// }

// console.log("totalFeedback: ", totalFeedback);

const values = Object.values(feedback);
console.log("🚀 ~ values:", values);

for (const value of values) {
  totalFeedback += value;
}

// console.log("totalFeedback: ", totalFeedback);

const entries = Object.entries(feedback);
// console.log("🚀 ~ entries:", entries);
