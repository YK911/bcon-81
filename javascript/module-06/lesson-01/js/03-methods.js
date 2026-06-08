/*
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

const showThis = function (a, b, arr) {
  console.log(a, b, arr);
  console.log("showThis -> this", this);
};

const objA = {
  a: 5,
  b: 10,
};

// console.dir(showThis);

// showThis(objA, 222, [123, 456, 789]);

// showThis.call(objA, 5, 1, [100, 200, 300]);
// showThis.apply(objA, [5, 1, [100, 200, 300]]);

const objB = {
  x: 788,
  y: 25,
};

// showThis.call(objB, 111, 222, 333);
// showThis.apply(objB, [111, 222, 333]);

/*
 * -------------------------------
 */
const changeColor = function (newColor) {
  console.log("changeColor -> this", this); // this -> hat
  this.color = newColor;
};

const hat = {
  name: "hat",
  color: "black",
};
// console.log(hat);

// changeColor.call(hat, "orange");
// console.log(hat);

const sweater = {
  name: "sweater",
  color: "green",
};

// changeColor.call(sweater, "blue");
// console.log(sweater);

/**
 * -------------------------------
 */
const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor("yellow");
// console.log(hat);

// changeSweaterColor("red");
// console.log(sweater);

/**
 * -------------------------------
 */
const counter = {
  value: 100,

  init() {
    output.children[0].textContent = this.value;
  },

  updateInterface() {
    output.children[0].textContent = this.value;
  },

  increment(value) {
    // console.log("increment -> this", this);
    this.value += value;
  },
  decrement(value) {
    // console.log("decrement -> this", this);
    this.value -= value;
  },
};

counter.init();

const updateCounter = function (value, operation) {
  // console.log(operation);
  operation(value);
  counter.updateInterface();
};

counterControls.onclick = event => {
  const operationType = event.target.id;
  const value = Number(userInput.value);

  updateCounter(value, counter[operationType].bind(counter));
  console.log(counter);
};

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(10, counter.increment.bind(counter));
// updateCounter(10, counter.increment.bind(counter));
// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));
