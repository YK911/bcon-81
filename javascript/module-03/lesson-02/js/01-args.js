/*
 * Псевдомасив arguments і Array.from
 */

//? Function declaration
function printArguments() {
  // arguments = []
  // let x = undefined
  // let y = undefined

  console.log("🚀 ~ printArguments ~ arguments:", arguments);
  for (const arg of arguments) {
    console.log("🚀 ~ arg:", arg);
  }
  // console.log([1, 2, 3]);

  const args = Array.from(arguments);
  console.log("🚀 ~ args:", args);

  // return 111;
  // return undefined // by default
}

//? Function expression
const printArgs = function () {
  const args = Array.from(arguments);
  const res = args.fill("***");
  console.log(res);
};

// printArguments(1, 2, 3);
// printArguments(1, 2, 3, 4, 5);
// printArguments(1, 2, 3, 4, 5, 6, 7);
// printArgs(1, 2, 3);
/*
 * Напиши функцію add для складання довільної
 * кількості аргументів (чисел)
 */

function add() {
  // arguments = []
  let sum = 0;

  for (const number of arguments) {
    sum += number;
  }

  return sum;
}

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

/*
 * Напиши функцію calAverage() яка приймає довільну кількість
 * аргументів і повертає їхнє середнє значення. Усі аргументи
 * будуть лише числами.
 */
function calAverage() {
  //* arguments = [1, 2, 3, 4]
  // let sum = 0;
  // for (const number of arguments) {
  //   sum += number;
  // }

  // return sum / arguments.length;

  const sum = add(...arguments); //* add(1, 2, 3, 4)
  return sum / arguments.length;
}

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
