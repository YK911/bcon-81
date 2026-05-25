/*
 * Оператор switch
 */

// const username = "Mango";
const username = "Poly";

// switch (username) {
//   case "Mango": // username === "Mango" -> true
//     console.log("Case 1 worked");
//     break;

//   case "mango": // username === "mango"
//     console.log("Case 2 worked");
//     break;

//   case "mangO": // username === "mangO" -> false
//   case "Poly": // username === "Poly" -> true
//     console.log("Case 3 worked");
//     break;

//   default:
//     console.log("All cases are skiped");
// }

/*
 * Виконай рефакторинг коду задачі використовуючи switch.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

const daysUntilDeadline = 0;

// if (daysUntilDeadline === 0) {
//   console.log("Today");
// } else if (daysUntilDeadline === 1) {
//   console.log("Tomorrow");
// } else if (daysUntilDeadline === 2) {
//   console.log("Overmorrow");
// } else {
//   console.log("Date in the future");
// }

// switch (daysUntilDeadline) {
//   case 0: // daysUntilDeadline === 0
//     console.log("Today");
//     break;

//   case 1:
//     console.log("Tomorrow");
//     break;

//   case 2:
//     console.log("Overmorrow");
//     break;

//   default:
//     console.log("Date in the future");
// }

/*
 * Напиши скрипт вибору опції доставки товару.
 * Опція зберігається у змінній option: 1 - самовивіз, 2 - курʼєр, 3 - пошта
 *
 * В змінну message потрібно записати повідомлення залежно від опції.
 * - 'Ви можете отримати товар завтра після 12:00 в нашому офісі'
 * - 'Курʼєр доставить замовлення з 9:00 до 18:00'
 * - 'Посилка буде відправлена сьогодні'
 * - 'Вам зателефонує менеджер'
 */

const option = 11;
let message = "";

switch (option) {
  case 1:
    message = "Ви можете отримати товар завтра після 12:00 в нашому офісі";
    break;
  case 2:
    message = "Курʼєр доставить замовлення з 9:00 до 18:00";
    break;
  case 3:
    message = "Посилка буде відправлена сьогодні";
    break;

  default:
    message = "Вам зателефонує менеджер";
}

console.log("🚀 ~ message:", message);
