/*
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */

/*
 * Глобальний контекст
 */

function print(x, y) {
  // params: let x, let y
  // arguments: []
  // this: undefined
  console.log("print -> this", this);

  function showThis() {
    console.log(this);
  }
  // return undefined
}

// print();

function fnAAA(callback) {
  callback();
}

// fnAAA(showThis);

/*
 * Контекст методу об'єкта
 */

const user = {
  tag: "Mango",
  showTag() {
    // this === user;
    console.log(this); // undefined
  },
};

// user.showTag();

/*
 * Контекст методу об'єкта, але оголошена як зовнішня функція.
 */

function showTag() {
  console.log("showTag -> this", this);
  console.log("showTag -> this.tag", this.tag);
}

// showTag();

const mango = {
  tag: "Mango",
};

mango.showUserTag = showTag;
// console.log("mango", mango);

// mango.showUserTag();

/*
 * Виклик без контексту, але оголошена як метод об'єкта.
 */

const poly = {
  tag: "Poly",
  showTag() {
    console.log("showTag -> this", this);
    console.log("showTag -> this.tag", this.tag);
  },
};

// poly.showTag();

const outerShowTag = poly.showTag;

// outerShowTag();

/*
 * Контекст у callback-функціях
 */

const jacob = {
  tag: "Jacob",
  showTag() {
    console.log("showTag -> this", this);
    console.log("showTag -> this.tag", this.tag);
  },
};

function invokeAction(callback) {
  console.log(callback);
  callback();
}

// invokeAction(jacob.showTag);
