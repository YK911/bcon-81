/*
 * Масив об'єктів
 *
 * - Перебір масива
 * - Пошук об'єкта за значенням властивості
 * - Колекція значень властивості
 */

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: true },
];

// console.table(friends);

/**
 * Пошук друга за іменем
 */
function findFriendByName(allFriends, friendName) {
  for (const friend of allFriends) {
    // console.log(friend.name); // {}

    if (friendName === friend.name) {
      return `Friend ${friendName} exsits`;
    }
  }

  return `Friend ${friendName} not found`;
}

const res1 = findFriendByName(friends, "Poly");
// console.log("🚀 ~ res1:", res1);
const res2 = findFriendByName(friends, "Chelsy");
// console.log("🚀 ~ res2:", res2);

/**
 * Отримуємо імена всіх друзів
 */
function getAllNames(allFriends) {
  const friendNames = [];

  for (const friend of allFriends) {
    friendNames.push(friend.name);
  }

  return friendNames;
}

const res3 = getAllNames(friends);
// console.log("🚀 ~ res3:", res3);

/**
 * Отримуємо імена тільки тих друзів, які зараз онлайн
 */
function getOnlineFriends(allFriends) {
  const friendNames = [];

  for (const friend of allFriends) {
    if (friend.online) {
      friendNames.push(friend.name);
    }
  }

  return friendNames;
}

const res4 = getOnlineFriends(friends);
// console.log("🚀 ~ res4:", res4);

/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з
 * таким ім'ям, ціною та кількістю з об'єкта
 */

const stones = [
  { name: "Смарагд", price: 1300, quantity: 4 },
  { name: "Діамант", price: 2700, quantity: 3 },
  { name: "Сапфір", price: 400, quantity: 7 },
  { name: "Щебінь", price: 200, quantity: 2 },
];

function calcTotalPrice(allStones, stoneName) {
  for (const stone of allStones) {
    // console.log("🚀 ~ calcTotalPrice ~ stone:", stone);

    if (stoneName === stone.name) {
      return stone.price * stone.quantity;
    }
  }

  return 0;
}

const res5 = calcTotalPrice(stones, "Сапфір"); // 400 *  7 = 2800
// console.log("🚀 ~ res5:", res5);
const res6 = calcTotalPrice(stones, "Бурштин"); // 0
// console.log("🚀 ~ res6:", res6);
