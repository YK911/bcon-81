/*
 * Методи рядків
 *
 *  - slice
 *  - toLowerCase/toUpperCase
 *  - includes
 *  - startsWith/endsWith
 *  - indexOf
 *  - trim
 *  - replace/replaceAll
 */

const username = "Jacob Mercer";
// console.log("🚀 ~ username:", username.length);

const fullUsernameCopy = username.slice();
// console.log("🚀 ~ fullUsernameCopy:", fullUsernameCopy);

// console.log(username === fullUsernameCopy);

const partUsernameCopy = username.slice(2);
// console.log("🚀 ~ partUsernameCopy:", partUsernameCopy);

// const programmingLanguage = "JavaScript";
// const programmingLanguageCopy = programmingLanguage.slice(
//   4,
//   programmingLanguage.length
// );
// console.log("🚀 ~ programmingLanguageCopy:", programmingLanguageCopy);
// console.log(programmingLanguage.slice(-4, -2));

// const lowerCase = programmingLanguage.toLowerCase();
// console.log("🚀 ~ lowerCase:", lowerCase);
// const upperCase = programmingLanguage.toUpperCase();
// console.log("🚀 ~ upperCase:", upperCase);

const employee = "mango";
const firstLetter = employee.slice(0, 1).toUpperCase();
// console.log("🚀 ~ firstLetter:", firstLetter);
const restLetters = employee.slice(1);
// console.log("🚀 ~ restLetters:", restLetters);
// const transformEmployeeName = firstLetter + restLetters;
// const transformEmployeeName = `${firstLetter}${restLetters}`;
const transformEmployeeName = firstLetter.concat(restLetters);
// console.log("🚀 ~ transformEmployeeName:", transformEmployeeName);

function capitalize(string = "") {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

const res1 = capitalize(employee);
// console.log("🚀 ~ res1:", res1);
const res2 = capitalize("employee");
// console.log("🚀 ~ res2:", res2);

const jsFilePath = "script.js";
const cssFilePath = "styles.css";
const htmlFilePath = "index.min.html";

// const isJsFile = jsFilePath.includes(".js");
// const isJsFile = cssFilePath.includes(".css");
// const isJsFile = htmlFilePath.includes("s", 7);
// console.log("🚀 ~ isJsFile:", isJsFile);

const isIndexFile = htmlFilePath.startsWith("e");
console.log("🚀 ~ isIndexFile:", isIndexFile);
const isHtmlFile = htmlFilePath.endsWith("html");
console.log("🚀 ~ isHtmlFile:", isHtmlFile);

const dotSymbolIndex = htmlFilePath.indexOf(",");
console.log("🚀 ~ dotSymbolIndex:", dotSymbolIndex);
// const fileName = htmlFilePath.slice(0, dotSymbolIndex);
// console.log("🚀 ~ fileName:", fileName);
// if (dotSymbolIndex === -1) {
//   alert("Sorry, find symbol doen't includes in string");
// }
const programmingLanguage = "                Java   Script                  ";
const normalizedStr = programmingLanguage.trim();
console.log("🚀 ~ normalizedStr:", normalizedStr);

// const normalizedSearchQuery = searchQuery.value.trim();
// console.log("🚀 ~ normalizedSearchQuery:", normalizedSearchQuery);

function checkSearchQuery(query) {
  const normalizedQuery = query.trim();

  if (normalizedQuery.length > 0) {
    return normalizedQuery;
  } else {
    return null;
  }
}

const result = checkSearchQuery(searchQuery.value);
// console.log("🚀 ~ result:", result);

const jsFileUrl = "script.js";
const res3 = jsFileUrl.replace(".js", ".min.js");
console.log("🚀 ~ jsFileUrl:", jsFileUrl);
console.log("🚀 ~ res3:", res3);

const fileNames = "style.css, hero.css, about.css";
const res4 = fileNames.replaceAll(".css", ".min.css");

console.log("🚀 ~ fileNames:", fileNames);
console.log("🚀 ~ res4:", res4);
