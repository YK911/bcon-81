/**
 * Оператори
 *
 * - Оператори порівняння
 * - Оператори рівності
 * - Приведення типів операндів
 */

// console.log(5 > 4);

// console.log(10 >= "7");

// console.log("2" > "12"); // 32 > 31

// console.log("2" < "12"); // 32 < 31

// console.log("4" == 4); // 4 == 4

// console.log("6" === 6);

// console.log("false" === false); // false

// console.log("1 == true ~ ", 1 == true);

// console.log("1 === true ~", 1 === true);

// console.log(`"0" == false`, "0" == false);

// console.log(`"0" === false`, "0" === false);

// console.log("papaya" < "papaya");

// console.log("Papaya" === "papaya");

// console.log("undefined == null", undefined == null);

// console.log("undefined === null", undefined === null);

const normalizedUserValue = username.value.trim();

const isEmptyUserValue = normalizedUserValue.length === 0;

if (isEmptyUserValue) {
  username.classList.add("error");
}
