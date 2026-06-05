/*
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */

const numbers = [1, 9, 6, 2, 3, 11, 22];

// const sortedASC = numbers.toSorted((curr, prev) => {
//   console.log(curr); // 3
//   console.log(prev); // 2
//   console.log(curr - prev); // 1

//   return curr - prev;
// });
// console.log("🚀 ~ sortedASC:", sortedASC);
// const sortedDESC = numbers.toSorted((curr, prev) => prev - curr);
// console.log("🚀 ~ sortedDESC:", sortedDESC);

const letters = ["b", "B", "a", "A", "a", "a"];
// const sortedASCLetters = letters.toSorted((curr, prev) => {
// console.log("a:", curr); // a
// console.log("b:", prev); // B

// console.log(curr.localeCompare(prev)); // 0
// });
// console.log("sortedASCLetters", sortedASCLetters);

const scores = [61, 19, 74, 35, 92, 56];
scores.toSorted((a, b) => a - b);

/**
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */

// console.log(
//   numbers.toSorted((curEl, nextEl) => {
//     return nextEl - curEl;
//   })
// );

const descSortedNumbers = numbers;
const ascSortedNumbers = numbers;
// console.log("descSortedNumbers", descSortedNumbers);
// console.log("ascSortedNumbers", ascSortedNumbers);

/**
 * Сортування масиву об'єктів
 */
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];
console.table(players);

// За ігровим часом
const sortedByBestPlayers = players.toSorted((curr, prev) => {
  return prev.timePlayed - curr.timePlayed;
});
// console.table(sortedByBestPlayers);

const sortedByWorstPlayers = players.toSorted((curr, prev) => {
  return curr.timePlayed - prev.timePlayed;
});
// console.table(sortedByWorstPlayers);

// По першій літері имені
const byName = players.toSorted((curr, prev) => {
  return curr.name.localeCompare(prev.name);
});
console.table(byName);
