/*
 * Пошук HTML елементу за допомогою querySelector та querySelectorAll
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 */

// console.dir(window.document.body);

// const textEl = document.getElementsByTagName("p");
// console.log("🚀 ~ textEl:", textEl);

// const btnEl = document.getElementsByClassName("magic-btn");
// console.log("🚀 ~ btnEl:", btnEl);

// const navEl = document.querySelector("ul.site-nav");
// console.log("🚀 ~ navEl:", navEl);

// const textEl = navEl.querySelectorAll("span");
// console.log("🚀 ~ textEl:", textEl);

// const navigationsEl = document.querySelectorAll(".site-nav");
// console.log("🚀 ~ navigationsEl:", navigationsEl);

// console.log(item1);

const navEl = document.querySelector("ul.site-nav");
// console.log("🚀 ~ navEl:", navEl);

const navElArr = [...navEl.children].map(el => {
    return el.firstElementChild.textContent;
});
// console.log("🚀 ~ navElArr:", navElArr);

const linksEl = [...document.querySelectorAll("ul.site-nav > li > a")];
console.log("🚀 ~ linksEl:", linksEl)
const linksContent = []
linksEl.forEach((el) => { 
    linksContent.push(el.textContent);
})
console.log("🚀 ~ linksContent:", linksContent)