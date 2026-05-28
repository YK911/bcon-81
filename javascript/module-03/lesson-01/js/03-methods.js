/*
 * Методи масиву
 *
 * - join
 * - split
 * - slice
 * - concat
 * - indexOf
 * - push/pop
 */

const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// console.table(courses);

const newCourses = courses.slice(); // -> ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"]
// console.log("🚀 ~ newCourses:", newCourses);
// console.log("courses === newCourses", courses === newCourses); // true

const partCourses = courses.slice(2); // -> ["JavaScript", "React", "PostgreSQL"]
// console.log("🚀 ~ partCourses:", partCourses);

const partCopyCourses = courses.slice(2, 4); // -> ["JavaScript", "React"]
// console.log("🚀 ~ partCopyCourses:", partCopyCourses);

// console.log(courses.slice(-1));

const modifiedCourses = ["Data Analytics", "SMM"];
const arr1 = ["Next.js", "Node.js"];
// const updatedCourses = courses.concat();
// const updatedCourses = courses.concat(arr1, modifiedCourses);
// console.log("🚀 ~ updatedCourses:", updatedCourses);

const searchedEl = "React";

const searchElIndex = courses.indexOf(searchedEl);
// console.log("🚀 ~ searchElIndex:", searchElIndex);

// if (searchElIndex === -1) {
//   alert("Element not found");
// }

// courses[searchElIndex];

courses.push("Data analytics", "SMM");
// console.table(courses);

courses.push("Prompt Engineer");
// console.table(courses);

// const result = courses.pop();
// console.log("🚀 ~ result:", result);

courses.shift();
courses.shift();
courses.shift();

courses.unshift("Python");

courses.reverse().push("Rust");
courses.reverse();

// console.table(courses);

const notification = "JavaScript is awesome";
// console.log("🚀 ~ notification:", notification);
const notificationArr = notification.split(" ");
// console.log("🚀 ~ notificationArr:", notificationArr);
const res1 = notificationArr[1][0].toUpperCase() + notificationArr[1].slice(1); // 'is'
// console.log("🚀 ~ res1:", res1);

const res2 = notificationArr[2][0].toUpperCase() + notificationArr[2].slice(1); // 'awesome'
// console.log("🚀 ~ res2:", res2);

notificationArr[1] = res1;
notificationArr[2] = res2;
// console.log("🚀 ~ notificationArr:", notificationArr);
const updNotification = notificationArr.join(" *** ");
// console.log("🚀 ~ updNitification:", updNotification);

const clients = "Mango, Poly, Ajax, Neptun, Saturn";
const clientArr = clients.split(", ");
// console.log("🚀 ~ clientArr:", clientArr);

const client1 = `<li>${clientArr[0]}</li>`;
const client2 = `<li>${clientArr[1]}</li>`;
const client3 = `<li>${clientArr[2]}</li>`;
const client4 = `<li>${clientArr[3]}</li>`;
const client5 = `<li>${clientArr[4]}</li>`;

// console.log(client1 + client2 + client3 + client4 + client5);

clientsList.innerHTML = client1 + client2 + client3 + client4 + client5;
