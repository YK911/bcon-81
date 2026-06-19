/*
 * LocalStorage
 */
const LS_KEY = "Array of names";
const names = ["Alice", "Kate", "Emma"];

// console.log(localStorage.length);

// localStorage.setItem(LS_KEY, names);

// const namesFromLs = localStorage.getItem(LS_KEY);
// console.log("🚀 ~ namesFromLs:", namesFromLs);

/*
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */

const namesToJson = JSON.stringify(names);
console.log("🚀 ~ namesToJson:", namesToJson);
localStorage.setItem(LS_KEY, namesToJson);
/*
 * Читання
 * Чому треба використовувати метод JSON.parse
 */
const dataFromLS = localStorage.getItem(LS_KEY);
if (dataFromLS) {
  const namesFromLS = JSON.parse(dataFromLS);
  console.log("🚀 ~ namesFromLS:", namesFromLS);
}

/*
 * Видалення
 */
// setTimeout(() => {
//   localStorage.removeItem("theme");
// }, 2000);

/*
 * LocalStorage не може зберігати функції
 */

function add(a, b) {
  return a + b;
}

const fnToJson = JSON.stringify(add);
console.log("🚀 ~ fnToJson:", fnToJson);

localStorage.setItem("fn", fnToJson);
const res1 = localStorage.getItem("fn");
console.log("🚀 ~ res1:", res1);

const calculator = {
  a: 5,
  b: 10,
  add() {
    return this.a + this.b;
  },
};

localStorage.setItem("calculator", JSON.stringify(calculator));
