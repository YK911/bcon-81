import "../common.css";

/*
 - Створення
 - Unix-час
 - Методи
 - Різниця часу
 - Date.now()
*/

// const date = new Date("2030-03-16");
// const date = new Date("03/16/2030");
// const date = new Date("March 16, 2030");
// const date = new Date(2030, 0, 16, 3, 25, 16);
// const date = new Date(4000);
// console.log("🚀 ~ date:", date.getTime());

// const date1 = Date.now();
// console.log("date1", date1);

// setInterval(() => {
//   const currentTime = Date.now();
//   const deltaTime = currentTime - date1;
//   console.log(`Delta time: ${deltaTime}`);
// }, 1000);

// const deadline = new Date("2026-06-23").getTime();
// console.log("🚀 ~ deadline:", deadline);
const deadline = new Date("2026-06-23");
// console.log("Day", deadline.getDay());
// console.log("Day", deadline.getHours());
// console.log("Day", deadline.setMinutes(32));
console.log(deadline.toDateString());
console.log(deadline.toString());
console.log(deadline.toLocaleDateString());

// setInterval(() => {
//   const currentTime = Date.now();
//   const deltaTime = deadline - currentTime;
//   console.log(`Delta time: ${deltaTime}`);
// }, 1000);
