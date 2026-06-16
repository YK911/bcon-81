/*
 * Деструктуризація об'єкта в параметрах функції
 */

const user = {
  // username: "Jacob",
  skills: {
    html: true,
    css: false,
    js: true,
  },
};

// Без деструктуризації
function getUserName(obj = {}) {
  const {
    username,
    skills: { html, css, js },
  } = obj;

  console.log(
    `Hello my name is ${username}, I know html - ${html}, css - ${css} and js - ${js}`
  );
  // console.log(
  //   `Hello my name is ${obj.username}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js - ${obj.skills.js}`
  // );
}
getUserName(user);

// З деструктуризацією

function showUserName({
  username = "MANGO",
  skills: { html, css, js: JavaScript },
}) {
  console.log(
    `Hello my name is ${username}, I know html - ${html}, css - ${css} and js - ${JavaScript}`
  );
}
showUserName(user);

// Form processing
const { agreementForm } = document.forms;

agreementForm.addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;

  const {
    name: { value: nameValue },
    email: { value: emailValue },
    agreement: { value: agreementValue = "disagree" },
  } = form.elements;

  console.log("🚀 ~ name:", nameValue);
  console.log("🚀 ~ email:", emailValue);
  console.log("🚀 ~ agreement:", agreementValue);

  form.reset();
});
