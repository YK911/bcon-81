/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */

// console.log(document.forms.feedback);
const form = document.querySelector(".js-form");

// form.addEventListener("submit", event => {
//   event.preventDefault();
//   const form = event.target;
//   const commentValue = form.elements.comment.value;
//   const emailValue = form.elements.email.value;
//   const passValue = form.elements.password.value;
//   console.log("🚀 ~ comment:", commentValue);
//   console.log("🚀 ~ comment:", emailValue);
//   console.log("🚀 ~ comment:", passValue);

//   const formData = {
//     comment: form.elements.comment.value,
//     email: form.elements.email.value,
//     pass: form.elements.password.value,
//   };
//   console.log("🚀 ~ formData:", formData);

//   form.reset();
// });

// form.addEventListener("submit", event => {
//   event.preventDefault();
//   const form = event.target;

//   const formData = Object.fromEntries(new FormData(form));
//   console.log("🚀 ~ formData:", formData);

//   form.reset();
// });
