/*
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Метод includes
 * - Цикл for...of
 * - Різниця у використанні for і for...of
 */

const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// console.table(friends);

// debugger;
// for (let i = 0; i < friends.length; i += 1) {
// console.log("i:", i);
// console.log(`🚀 ~ ${i + 1}:`, friends[i]);
// }

// console.table(friends);

// for (let friend of friends) {
//   console.log(friend);
//   console.log(friends);
// }
const cartItems = ["🍑", "🍜", "🍫", "🍿"];
for (const item of cartItems) {
}

for (const item of ["🍑", "🍜", "🍫", "🍿"]) {
  // debugger;
  // console.log(item);
}

/*
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */

const values = "8 11";
const squareValues = values.split(" ");
// console.log("🚀 ~ squareValues:", squareValues);

const square = squareValues[0] * squareValues[1];
// console.log("🚀 ~ square:", square);

/*
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];

//   const output = `${i + 1}: ${fruit}`;

//   console.log(output);
// }

let counter = 1;
let output = "";

for (const fruit of fruits) {
  output += `<li>${counter}: ${fruit}</li>`;
  counter += 1;
}

console.log("🚀 ~ output:", output);

fruitsList.innerHTML = output;
