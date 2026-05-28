/*
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     total += number;
//   }
// }

// for (const number of numbers) {
//   if (number % 2 !== 0) continue;

//   total += number;
// }

// console.log(total);

/*
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

const names = "Jacob,William,Solomon,Artemis";
const phones = "89001234567,89001112233,890055566377,890055566300";
let output = "";
const resultArr = [];

const namesArr = names.split(",");
// console.log("🚀 ~ namesArr:", namesArr);
const phonesArr = phones.split(",");
// console.log("🚀 ~ phonesArr:", phonesArr);

for (let i = 0; i < namesArr.length; i += 1) {
  const name = namesArr[i];
  const phone = phonesArr[i];
  //   console.log("🚀 ~ name:", name);
  //   console.log("🚀 ~ phone:", phone);

  output += `📱 ${name}: ${phone} \n`;

  resultArr.push(`📱 ${name}: ${phone}`);
}
// console.log(output);
// console.log("🚀 ~ resultArr:", resultArr);
const res = resultArr.join("\n");
// console.log("🚀 ~ res:", res);

/*
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символами пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

const string = "Welcome to the future";
const words = string.split(" ");
// console.log("🚀 ~ words:", words);
const res2 = words.slice(1, words.length - 1);
// console.log("🚀 ~ res2:", res2.join(" "));

/*
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */

const values = [2, 17.1, 94, 1.5, 23, 37, 0.5, -0.25];
let min = values[0];

for (let i = 1; i < values.length; i++) {
  //   debugger;
  if (min > values[i]) {
    min = values[i];
  }
}

console.log(min); // 1
