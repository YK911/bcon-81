/**
 * Рядки
 *
 * - Конкатенація рядків
 * - Шаблонні рядки
 * - Довжина рядка
 * - Індексація елементів
 * - Незмінність рядків
 */

const firstName = "Chelsy";
const lastName = "Emerald";

// const fullName = firstName + " " + lastName + " " + "🤩";
// console.log("🚀 ~ fullName:", fullName);

const fullName = `${firstName} ${lastName} 🤩`;
// console.log("🚀 ~ fullName:", fullName);

const quantity = 15;
const orderMsg = `${quantity} You ordered ${quantity} bots - ${quantity}`;
// console.log("🚀 ~ orderMsg:", orderMsg);

const message = "This string is 28 chars long";
console.log("🚀 ~ message:", message);
// console.log(message.length);
// console.log(message.at(10));

// const firstLetter = message[0];
// console.log("🚀 ~ firstLetter:", firstLetter);
// const someLetter = message[101];
// console.log("🚀 ~ someLetter:", someLetter);
// const lastLetter = message[message.length - 1];
// console.log("🚀 ~ lastLetter:", lastLetter);

const nickname = "mango";
const firstLetter = nickname[0].toUpperCase();
console.log("🚀 ~ firstLetter:", firstLetter);

// const restNickname = nickname.slice(1, 5);
const restNickname = nickname.slice(1);
console.log("🚀 ~ restNickname:", restNickname);

const updatedNickname = `${firstLetter}${restNickname}`;
// const updatedNickname = firstLetter + restNickname;
console.log("🚀 ~ updatedNickname:", updatedNickname);

//! nickname[0] = firstLetter; // error

console.log(notificationContent.textContent);

const notificationText = notificationContent.textContent.trim();
console.log("🚀 ~ notificationText:", notificationText);

const notificationTextPart = notificationText.slice(0, 56);
console.log("🚀 ~ notificationTextPart:", notificationTextPart);

notificationContent.textContent = notificationTextPart + "...";

/**
 * Склади фразу за допомогою шаблонних рядків
 * A has B bots in stock, де A, B - змінні вставлені в рядок.
 */
const companyName = "Cyberdyne Systems";
const repairBots = 150;
const defenceBots = 50;
const totalBots = repairBots + defenceBots;
// const msg = `${companyName} has ${totalBots} bots in stock`;

// const msg = `${companyName} has ${repairBots + defenceBots} bots in stock`;

const msg = `${companyName} has ${calcTotalBots(repairBots, defenceBots)} bots in stock`;
console.log(msg); // "Cyberdyne Systems has 200 bots in stock"

function calcTotalBots(a, b) {
  return a + b;
}
