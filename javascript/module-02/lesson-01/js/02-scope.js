/**
 * Блокова область видимості змінних
 */
// debugger;

//? HOISTING

// checkValue();

const c = 15;
const b = 111;

if (true) {
  const a = 5;
  console.log(a);
  //! console.log(b); // ❌
  console.log(c);
}

if (true) {
  const b = 10;
  //! console.log(a); // ❌
  console.log(b); // 10
  console.log(c); // 15
}

//! console.log(a); // ❌
console.log(b);
console.log(c);

function checkValue() {
  console.log("Checked");
}
