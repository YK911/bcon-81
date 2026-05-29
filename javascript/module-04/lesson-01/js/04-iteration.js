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

let totalFeedback = 0;

// console.log("totalFeedback: ", totalFeedback);

/**
 * ---------------------------------
 */
const keys = feedback;
console.log("🚀 ~ keys:", keys);

// console.log("totalFeedback: ", totalFeedback);

const values = feedback;
console.log("🚀 ~ values:", values);

// console.log('totalFeedback: ', totalFeedback);
