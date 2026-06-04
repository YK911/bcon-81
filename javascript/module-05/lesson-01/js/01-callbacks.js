/**
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

function fnA(message, callback) {
  // message = "A message"
  // callback = function fnB(number) {}
  console.log(message);

  callback(111);
  // fnB(222);
}

function fnB(number) {
  console.log("Log during fnB execution ", number);
}

// fnA("A message", fnB);

function greet(name) {
  console.log(`Ласкаво просимо ${name}. Реєстрація пройшла успішно`);
}

function registerGuest(name, callback) {
  // debugger;
  console.log(`Реєструємо гостя ${name}`);

  callback(name);
}

// registerGuest("Mango", greet);

/**
 * Функція calc(a, b, callback)
 */

function calc(a, b, callback) {
  // return callback(a, b);

  switch (key) {
    case "+":
      add(a, b);
      break;
    case "/":
      divide(a, b);
      break;
    case "**":
      pow(a, b);
      break;
    case "-":
      extract(a, b);
      break;

    default:
      break;
  }
}

function add(a, b) {
  return a + b;
}
function divide(a, b) {
  return a / b;
}
function pow(a, b) {
  return a ** b;
}
function extract(a, b) {
  return a - b;
}

// const res1 = calc(2, 3, add);
// const res1 = calc(2, 3, (a, b) => a + b);
// console.log("🚀 ~ res1:", res1);

// const res2 = calc(10, 8, divide);
// console.log("🚀 ~ res2:", res2);

// const res3 = calc(2, 4, pow);
// console.log("🚀 ~ res3:", res3);

/*
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву. Функція
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */

function each(array, callback) {
  const newArr = [];

  for (const item of array) {
    const result = callback(item);
    newArr.push(result);
  }

  return newArr;
}

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  })
);
