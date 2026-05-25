/*
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
 * рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
 * то виводь рядок "14 г.", без хвилин.
 */

const hours = 14;
const minutes = 1;
let timestring;

// if (minutes === 0) {
//   timestring = `${hours} г.`;
// } else {
//   timestring = `${hours} г. ${minutes} хв.`;
// }

// timestring = `${hours} г.` + (minutes === 0 ? "" : `${minutes} хв.`);

// timestring = `${hours} г. ${minutes === 0 ? "" : `${minutes} хв.`}`;

// console.log("timestring:", timestring); // "14 г. 26 хв."

/*
 * Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй if...else if.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

const daysUntilDeadline = 3;
let currentValue = 0;

deadlineOption.onchange = function () {
  let deadlineResult = "🗓️: ";
  currentValue = Number(deadlineOption.value);

  if (daysUntilDeadline === currentValue) {
    deadlineResult += "Today";
  } else if (daysUntilDeadline === currentValue) {
    deadlineResult += "Tomorrow";
  } else if (daysUntilDeadline === currentValue) {
    deadlineResult += "Overmorrow";
  } else {
    deadlineResult += "Date in the future";
  }

  deadlineText.textContent = deadlineResult;
};
