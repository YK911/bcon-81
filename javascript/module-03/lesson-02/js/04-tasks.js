/*
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */

function logItems(items) {
  let output = "";
  for (let i = 0; i < items.length; i += 1) {
    output += `${i + 1} - ${items[i]} \n`;
  }

  return output;
}

// const res1 = logItems(["Mango", "Poly", "Ajax"]);
// console.log("🚀 ~ res1:\n", res1);
// const res2 = logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);
// console.log("🚀 ~ res2:\n", res2);

/*
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */

function printInfo(names, phones) {
  names = names.split(",");
  phones = phones.split(",");

  let output = "|  Name   |     Phone    |\n";

  for (let i = 0; i < names.length; i++) {
    output += `| ${names[i]} | ${phones[i]} |\n`;
  }

  return output;
}

// const res3 = printInfo(
//   "Jacobss,William,Solomon,Artemis",
//   "890012345367,890011122233,890055566377,890055566300"
// );
// console.log(res3);

/*
 * Напиши функцію formatTime(minutes) яка переведе значення
 * minutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

function formatTime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${doubleDigits(hours)}:${doubleDigits(minutes)}`;
}

function doubleDigits(value) {
  return String(value).padStart(2, 0);
}

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"
