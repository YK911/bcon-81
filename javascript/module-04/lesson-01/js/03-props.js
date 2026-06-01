/*
 * Об'єкти
 *
 * - Короткі властивості
 * - Обчислювальні властивості
 */

const userName = username.value;
// console.log("🚀 ~ userName:", userName);
const userEmail = useremail.value;
// console.log("🚀 ~ userEmail:", userEmail);

const userProps = {
  userName,
  userEmail,
};
// console.log("🚀 ~ userProps:", userProps);

// const username = "Mango";
// const email = "mango@mail.com";

// const credentials = {
//   username, // "Mango"
//   email, // "mango@mail.com"
// };

// console.log(credentials);
// console.log(credentials.username);
// console.log(credentials.email);

/**
 * -------------------------
 */

const inputName = "color";

const colorPickerData = {
  [inputName]: "#eee",
};
console.log("🚀 ~ colorPickerData:", colorPickerData);

const res = colorPickerData[inputName]; // colorPickerData["color"]
console.log("🚀 ~ res:", res);

const vegetable = prompt("Які овочі купити?", "cucumber");
// console.log("🚀 ~ vegetable:", vegetable);

const cart = {
  [vegetable]: 5,
  tomato: 4,
  selera: 10,
};
console.log("🚀 ~ cart:", cart);

console.log(cart[vegetable]);
