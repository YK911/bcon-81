/*
 * Масиви
 *
 * - Створення масиву
 * - Доступ до елементів
 * - Перевизначення значення елемента
 * - Довжина масиву
 * - Індекс останнього елемента
 */

const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
console.table(courses);
console.log(courses.length - 1);

const firstElement = courses[0];

const lastElementIndex = courses.length - 1;
const lastElement = courses[lastElementIndex];

console.log("🚀 ~ firstElement:", firstElement);
console.log("🚀 ~ lasrElement:", lastElement);

courses[1] = "Jacob";
courses[3] = "Adrian";
// courses[33] = "Earth";
console.table(courses);

courses.length = 0;
console.log("🚀 ~ courses:", courses);
