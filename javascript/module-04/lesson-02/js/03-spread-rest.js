/*
 * Синтаксис spread (...) і rest (...)
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */

const numbers = [111, ...[999, 888, 777], 222, ...[1111, 2222, 3333], 333];
// console.log(numbers);

/*
 * Пошук найменшої або найбільшої температури (числа)
 */
const temps = [18, 14, 12, 21, 17, 29, 24];

const minTempValue = Math.min(...temps);
// console.log("🚀 ~ minTempValue:", minTempValue);
const maxTempValue = Math.max(...temps);
// console.log("🚀 ~ maxTempValue:", maxTempValue);

function findMinTemp(temps = []) {
  let min = temps[0];

  for (const temp of temps) {
    if (temp < min) {
      min = temp;
    }
  }
}

/*
 * Створення масиву і тип за посиланням
 */
const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = [...a];

// b[0].x = 111;

// console.log("a: ", a);
// // console.log("b: ", b);

// const bDeepCopy = JSON.parse(JSON.stringify(a));
// console.log("🚀 ~ bDeepCopy:", bDeepCopy);

// bDeepCopy[0].x = 222;

// console.log(a === b); // false

/*
 * Поєднуємо кілька масивів в один через spread
 */
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

const everageTemps = function (allTemps) {
  let total = 0;

  for (const temp of allTemps) {
    total += temp;
  }

  return total / allTemps.length;
};

// console.log("🚀 ~ everageTemps:", everageTemps(allTemps));

/*
 * Створення об'єкта
 */
const objA = { x: 1, y: 2 };
const objB = { x: 0, z: 3 };
const objC = { ...objA, ...objB };

// console.log(objC);

/*
 * Оновлюємо налаштування користувача
 */
const defaultSettings = {
  theme: "light",
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

// console.log(finalSettings);

function add(...args) {
  // args = [111, 222, 333, 444, 555, 666, 777, 888]
  console.log(args); // Array -> []
}

// add(1, 2, 3);
// add(11, 22, 33, 44, 55);
// add(111, 222, 333, 444, 555, 666, 777, 888);

function showNotification(notificationText, elem, ...params) {
  // console.log("🚀 ~ showNotification:", params);
}

// showNotification(
//   "Some error occurs!",
//   "p",
//   {
//     color: "red",
//     textSize: 16,
//     border: true,
//   },
//   ["error-notification", "warn-notification", "info-notification"]
// );

const notificationOptions = {
  message: "Some notification text 😎",
  color: "red",
  fontSize: 20,
  isShown: true,
};

function renderNotification({ message, color, ...options }) {
  const defaultOptions = {
    fontSize: 16,
    backgroundColor: "white",
  };

  console.log(message);
  console.log(color);
  console.log(options);

  const fullOptions = {
    ...defaultOptions,
    ...options,
  };
  console.log("🚀 ~ fullOptions:", fullOptions);
}

// renderNotification(notificationOptions);
