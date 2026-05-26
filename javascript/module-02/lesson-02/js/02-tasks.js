/*
 * Форматування посилання (endsWith)
 *
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення link цей символ.
 * Використовуй конструкцію if...else.
 */

let link = "https://my-site.com/about";
if (!link.endsWith("/")) {
  link += "/";
}

// console.log(link);

/*
 * Форматування посилання (includes та логічне «І»)
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення link цей символ, але тільки в тому випадку,
 * якщо в link є підрядок "my-site".
 * Використовуй конструкцію if...else або тернарний оператор.
 */

let url = "https://somesite.com/about";
// let url = "https://my-site.com/about";
// if (url.includes("my-site") && !url.endsWith("/")) {
//   url += "/";
// }

url += url.includes("my-site") && !url.endsWith("/") ? "/" : "";
// console.log(url);

/*
 * Пошук у рядку методом includes()
 */

const blacklistedWord1 = "spam";
const blacklistedWord2 = "sale";

const string1 =
  "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
const string2 = "Biggest SALE this week, don't miss out!";
const string3 = "#fatlivesmatter advertising campaign";

// const res1 = string1.includes(blacklistedWord1);
// const res2 = string1.includes(blacklistedWord2);
// console.log("🚀 ~ res1:", res1);
// console.log("🚀 ~ res2:", res2);

// const hasSpamWords =
//   string1.includes(blacklistedWord1) || string1.includes(blacklistedWord2);

// if (hasSpamWords) {
//   console.warn("String has spam words!!!");
// }
// const res1 = string2.toLowerCase().includes(blacklistedWord1.toLowerCase());
// console.log("🚀 ~ res1:", res1);
// const res2 = string2.toLowerCase().includes(blacklistedWord2.toLowerCase());
// console.log("🚀 ~ res2:", res2);

// const res1 = string3.toLowerCase().includes(blacklistedWord1.toLowerCase());
// console.log("🚀 ~ res1:", res1);
// const res2 = string3.toLowerCase().includes(blacklistedWord2.toLowerCase());
// console.log("🚀 ~ res2:", res2);

// const replaceAllWhiteSpace = "Cute           Cat".replace(/\s+/g, " ");
// console.log("🚀 ~ replaceAllWhiteSpace:", replaceAllWhiteSpace);
