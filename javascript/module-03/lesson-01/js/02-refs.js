/*
 * Передача за посиланням і за значенням
 *
 * Різниця між примітивними і складними типами
 * Посилальна рівність (referential equality)
 */

let x = 555;
// console.log("🚀 ~ x:", x);
let y = x;

x = 888;
// console.log("🚀 ~ x update:", x);
// console.log("🚀 ~ y:", y);

const a = [1, 2, 3];
const b = a;
const c = b;

a[0] = 500;
b[2] = 333;

a[1] = 222;

console.log("🚀 ~ a", a);
console.log("🚀 ~ b", b);
console.log("🚀 ~ c", c);

console.log(a === b);

const abc = [];
const xyz = [];

console.log("abc === xyz", abc === xyz);
console.log([1, 2, 3] === [1, 2, 3]);
