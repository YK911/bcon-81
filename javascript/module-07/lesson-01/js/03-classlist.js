/*
 * Інтерфейс classList
 * - add
 * - remove
 * - toggle
 * - replace
 * - contains
 */

const currentPageUrl = "/contact";

const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`
);
const btnEl = document.querySelector(".js-btn");

btnEl.onclick = () => {
  // linkEl.classList.toggle("active");
  // linkEl.classList.replace("active", "current");
  const isActiveBtn = linkEl.classList.contains("active");
  console.log("🚀 ~ isActiveBtn:", isActiveBtn);
};

console.log("🚀 ~ linkEl:", linkEl.classList);
// linkEl.classList.add("active");
// linkEl.classList.remove("active");
// linkEl.classList.toggle("active");

// linkEl.style.fontSize = "48px";

// linkEl.style.border = "2px dashed tomato";

// linkEl.style.display = "flex";

// const linkStyles = {
//   fontSize: "48px",
//   border: "2px dashed tomato",
//   display: "flex",
// };
