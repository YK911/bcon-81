/**
 * Арифметичні операції
 * - Оператори +, -, *, /, %, **
 * - Комбіновані оператори
 */

const a = 10;
const b = 3;

// const result = a * (b - a);
// console.log("🚀 ~ result:", result);

// const result1 = a % b;
// console.log("🚀 ~ result1:", result1);

// const currentTime = 470;

// const restMinutes = currentTime % 60;
// console.log("🚀 ~ restMinutes:", restMinutes);

// const isEvenNumber = 12 % 2 === 0;
// console.log("🚀 ~ isEvenNumber:", isEvenNumber);
// const isOddNumber = 13 % 2 === 1;
// console.log("🚀 ~ isOddNumber:", isOddNumber);

/**
 * Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.
 */

const apples = 47;
const grapes = 135;

const totalFruits = apples + grapes;
console.log("🚀 ~ totalFruits:", totalFruits);
const diffFruits = apples - grapes;
console.log("🚀 ~ diffFruits:", diffFruits);

/**
 * Заміни вираз перевизначення комбінованим оператором
 */

let students = 100;
students = students + 50;

students += 20;
students -= 20;
students *= 20;
students /= 20;
students **= 20;
// console.log("🚀 ~ students:", students);

/**
 * Розбери пріоритет операторів в інструкції привласнення значення змінної result
 */

// const result = (108 + (223 - 2)) * 5;
// console.log("🚀 ~ result:", result);
// const result = 108 + 223 - 2 * 5;
// console.log("🚀 ~ result:", result);
