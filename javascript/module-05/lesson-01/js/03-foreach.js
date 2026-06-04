/**
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */

const numbers = [5, 10, 15, 20, 25];
let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//   total += numbers[i];
// }

// function logItems(item, index) {
//   console.log(`Індекс: ${index} | значення: ${item}`);
// }

// const calcTotal = item => (total += item);

// numbers.forEach(item => (total += item));

// numbers.forEach(function (item) {
//   total += item;
// });

// numbers.forEach(logItems);

// numbers.forEach(calcTotal);

// logItems("🍿", 10);

// console.log(total);

/*
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
function logItems(items) {
  console.log(items);
  // for (let i = 0; i < items.length; i += 1) {
  //   console.log(`${i + 1} - ${items[i]}`);
  // }

  items.forEach((item, idx) => console.log(`${idx + 1} - ${item}`));
}

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

/*
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
function printContactsInfo(names, phones) {
  const nameList = names.split(",");
  const phoneList = phones.split(",");
  // for (let i = 0; i < nameList.length; i += 1) {
  //   console.log(`${nameList[i]}: ${phoneList[i]}`);
  // }

  nameList.forEach((name, idx) => console.log(`${name}: ${phoneList[idx]}`));
}

// printContactsInfo(
//   "Jacob,William,Solomon,Artemis",
//   "89001234567,89001112233,890055566377,890055566300"
// );

/*
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
function calculateAverage(...args) {
  let total = 0;
  // args.forEach(item => (total += item));
  args.forEach((item, idx, arr) => {
    console.log(`Current number: ${item}`);
    console.log(`Next number: ${arr[idx - 1]}`);
  });
  // for (let i = 0; i < args.length; i++) {
  //   total += args[i];
  // }
  return total / args.length;
}

console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

const res = [1, 2, 3, 4];
// console.log("🚀 ~ res before forEach:", res);

res.forEach((item, idx, arr) => {
  arr[idx] = `00${item}`;
});

// console.log("🚀 ~ res after forEach:", res);
