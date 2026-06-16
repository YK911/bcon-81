/*
 * Деструктуризація об'єкта
 */
const user = {
  username: "Jacob name",
  skills: {
    html: true,
    css: false,
    js: true,
  },
  "user-password": "qweqwe",
  // age: 20,
  salary: 1111,
};

const username = "Mango";
// const username = user.username;

// const { username: name } = user; // const username = "Jacob name"
// console.log("🚀 ~ name:", name);
// console.log(`${username} is online`);

// const { age } = user;
// console.log("🚀 ~ age:", age);

const { "user-password": userPass } = user;
// console.log("🚀 ~ userPass:", userPass);

const { salary = 1000 } = user;
// console.log("🚀 ~ salary:", salary);
/*
 * Глибока деструктуризація об'єкта
 */

const {
  skills: { html, js },
  // skills,
} = user;
// console.log("🚀 ~ html:", html);
// console.log("🚀 ~ js:", js);

// console.log("🚀 ~ skills:", skills);

//? Особливості обробки форми

// console.log("🚀 ~ document.forms:", document.forms);
const { agreementForm } = document.forms;
// console.log("🚀 ~ agreementForm:", agreementForm);

const { userName, userAgreement } = agreementForm.elements;
// console.log("🚀 ~ userAgrement:", userAgreement);
// console.log("🚀 ~ userName:", userName);

// console.log(agreementForm.elements);

/*
 * Деструктуризація масива
 */

const rating = [111, 222, 333, 444, 555];
// const rating = [111, 222, 999];

// const [first, second, , , last = rating.at(-1)] = rating;
const [first, second, last = rating.at(-1), ...rest] = rating;
// console.log("🚀 ~ first:", first);
// console.log("🚀 ~ second:", second);
// console.log("🚀 ~ third:", third);
// console.log("🚀 ~ last:", last);
// console.log("🚀 ~ rest:", rest);

const userData = ["Mango", 20, { lat: 123, lon: 456 }];

const [name, age, { lat, lon }] = userData;
console.log("🚀 ~ name:", name);
console.log("🚀 ~ age:", age);
// console.log("🚀 ~ position:", position);
console.log("🚀 ~ lat:", lat);
console.log("🚀 ~ lon:", lon);
