/*
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Метод includes
 * - Цикл for...of
 * - Різниця у використанні for і for...of
 */

const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
console.table(friends);

for (let i = 0; i < friends.length; i += 1) {
  friends[i] += `-${i}`;
}

console.table(friends);

for (let friend of friends) {
  console.log(friend);
  console.log(friends);
}

/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */

const values = "8 11";

/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];
