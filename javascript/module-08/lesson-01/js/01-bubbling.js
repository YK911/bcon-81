/*
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на слухачі якого спіймали подію
 */

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const innerChild = document.querySelector("#inner-child");

parent.addEventListener("click", event => {
  console.log("currentTarget", event.currentTarget.id);
  console.log("event type", event.type);
});

innerChild.addEventListener("click", event => {
  event.stopImmediatePropagation();
  console.log("currentTarget", event.currentTarget.id);
  console.warn("event type first:", event.type);
});
innerChild.addEventListener("click", event => {
  console.error("event type second:", event.type);
});

// parent.addEventListener("contextmenu", event => {
//   // alert(`Message from: ${event.currentTarget.id}\n`);
//   console.log("🚀 ~ contextmenu parent:", event.currentTarget.id);
// });
// parent.addEventListener("click", event => {
//   // alert(`Message from: ${event.currentTarget.id}\n`);
//   console.log("🚀 ~ click:", event.currentTarget.id);
// });

// child.addEventListener("contextmenu", event => {
//   // alert(`Message from: ${event.currentTarget.id}\n`);
//   console.log("🚀 ~ contextmenu child:", event.currentTarget.id);
// });

// innerChild.addEventListener("click", event => {
//   //   console.log("🚀 ~ target:", event.target);
//   //   event.stopPropagation();
//   //   event.stopImmediatePropagation();
//   alert(`Message from: ${event.currentTarget.id}\n`);
// });
