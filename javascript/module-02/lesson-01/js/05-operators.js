/**
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

// console.log(Boolean(true)); // true

// console.log(Boolean(false)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean("")); // false

// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true
// console.log(Boolean("hello")); // true
// console.log(Boolean("false")); // true
// console.log(Boolean([])); // true
// console.log(Boolean({})); // true

/**
 * --------------------------------
 */

// console.log(5 && 0 && 1 && 4); // 0
// console.log(5 && "mango"); // "mango"

/**
 * --------------------------------
 */

// console.log(false || 5 || 0 || ""); // 5
// console.log(false || null); // null

/**
 * --------------------------------
 */

// console.log("!5: ", !5); // false
// console.log("!false: ", !false); // true

const res = Boolean("JS is magic!");
// console.log("🚀 ~ res:", res);

// console.log(!!"JS is magic!");

/**
 * --------------------------------
 */

// console.log(true && 3); // 3

// console.log(false && 3); // false

// console.log(true && 4 && "kiwi"); // "kiwi"

// console.log(true && 0 && "kiwi"); // 0

// console.log(true || 3); // true

// console.log(true || 3 || 4); // true

// console.log(true || false || 7); // true

// console.log(null || 2 || undefined); // 2

// console.log((1 && null && 2) > 0); // 1: null; 2: null > 0 -> false

// console.log(null || (2 && 3) || 4); // 1: 3; null || 3 -> 3
