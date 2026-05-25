/*
 * Напиши скрипт перевірки підписки користувача при доступі до контента
 * - Є три типа підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 */

const sub = "free";
let canAccessContent1;

const canAccessContent = sub === "pro" || sub === "vip";
// const canAccessContent = sub !== "free";
// console.log("🚀 ~ canAccessContent:", canAccessContent);

switch (sub) {
  case "pro":
  case "vip":
    canAccessContent1 = true;
    break;

  case "free":
    canAccessContent1 = false;
    break;

  default:
    canAccessContent1 = "Unsupported subscription type";
}
// console.log("🚀 ~ canAccessContent1:", canAccessContent1);

/*
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */

const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;
// console.log("Можна відкрити чат?", canOpenChat);
