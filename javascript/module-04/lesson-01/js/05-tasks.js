/*
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення
 * використовуючи Object.keys() та for...of
 */

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
// user.premium = false;
user.premium = !user.premium; // false

// console.log("🚀 ~ user:", user);

let output = "";
// for (const key in user) {
//   // console.log(key);
//   // console.log(user[key]);
//   output += `${key}:${user[key]}\n`;
// }

const keys = Object.keys(user);
// console.log("🚀 ~ keys:", keys);

for (const key of keys) {
  output += `${key}:${user[key]}\n`;
}

// console.log("🚀 ~ output:\n", output);
/*
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function calcSalaries(salaries = {}) {
  if (
    (typeof salaries === "object" &&
      salaries !== null &&
      Array.isArray(salaries)) ||
    typeof salaries === "string" ||
    typeof salaries === "number" ||
    typeof salaries === "boolean"
  ) {
    console.warn("salaries is not object");
    return null;
  }

  let total = 0;
  const salariesValues = Object.values(salaries);
  const isEmptySalaryes = salariesValues.length === 0;

  if (isEmptySalaryes) {
    return total;
  }

  for (const salary of salariesValues) {
    total += salary;
  }

  return total;
}

const res1 = calcSalaries(salaries);
console.log("🚀 ~ res1:", res1);
const res2 = calcSalaries({});
console.log("🚀 ~ res2:", res2);
const res3 = calcSalaries(["asdads", "asdads", "asdads"]);
console.log("🚀 ~ res3:", res3);
const res4 = calcSalaries("asdads");
console.log("🚀 ~ res4:", res4);
const res5 = calcSalaries(123);
console.log("🚀 ~ res5:", res5);
