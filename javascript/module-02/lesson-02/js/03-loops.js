/*
 * Цикли
 *
 * - Цикл for
 * - Відлік від 0 до N
 * - Зворотній відлік від N до 0
 * - Збільшення/зменшення лічильника на 2+
 * - Інкремент і декремент
 * - Цикли while і do...while
 */

// console.log("Before");
// for (let i = 0; i < 5; i += 1) {
//   debugger;
//   console.log("i:", i);
// }
// console.log("After");

/*
 * -------------------------------
 */

// console.log("Before");
// debugger;
// for (let i = 5; i >= 0; i -= 1) {
//   console.log("i:", i);
// }

// console.log("After");

let min = 6;
let max = 12;

// for (let i = min; i <= max; i += 1) {
//   console.log(i);
// }
// for (let i = min; ; i += 1) { } // infinity loop

// for (let i = max; i >= min; i -= 1) {
//   console.log(i);
// }

/*
 * -------------------------------
 */

// let start = 10;

// while (start > 0) {
//   console.log(start);
//   start -= 1;
// }

/*
 * -------------------------------
 */

// console.log("Before while loop");

let counter = 10_000;

// Заміри швидкості виконання коду
// console.time("Check while loop");
// while (counter > 0) {
//   counter -= 1;
// }
// console.timeEnd("Check while loop");

// let sum = 0;
// console.time("Check for loop");
// for (let i = 10_000; i > 0; i--) {
//   sum += i;
// }
// console.timeEnd("Check for loop");
// console.log(sum);

// do {
//   console.log("Inside while loop");
// } while (counter > 0);

// console.log("After while loop");

// function timerDecorator(fn, start, end) {
//   console.time("Check for loop");
//   fn(start, end);
//   console.timeEnd("Check for loop");
// }

// function runForLoop(start, end) {
//   let total = 0;
//   for (let i = start; i < end; i++) {
//     total += i;
//   }

//   return total;
// }

// timerDecorator(runForLoop, 0, 10_000);
