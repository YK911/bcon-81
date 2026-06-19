const STORAGE_KEY = "feedback-msg";

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");

form.addEventListener("submit", handleFormSubmit);
textarea.addEventListener("input", handleTextarea);

populateTextarea();
/*
 * - Скасовуємо стандартну поведінку
 * - Видаляємо повідомлення зі сховища
 * - Очищуємо форму
 */

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const formData = Object.fromEntries(new FormData(form));
  console.log("🚀 ~ formData:", formData);

  showToastMessage("Tnx! Data proceed", "STYLE_SUCCESS");
  clearLS(STORAGE_KEY);
  form.reset();
}

/*
 * - Отримуємо значення поля
 * - Зберігаємо його у сховище
 */

function handleTextarea(event) {
  saveLS(STORAGE_KEY, event.target.value.trim());
}

/*
 * - Отримуємо значення зі сховища
 * - Якщо там щось було, оновлюємо DOM
 */
function loadLS(key) {
  try {
    const lsData = localStorage.getItem(key) || "";
    if (lsData.length === 0) return "";

    return JSON.parse(lsData);
  } catch {
    showToastMessage();
  }
}

function saveLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function clearLS(key) {
  localStorage.removeItem(key);
}

function populateTextarea() {
  textarea.value = loadLS(STORAGE_KEY);
}

function showToastMessage(msg = "Some error", type = "STYLE_ERROR") {
  Toast.makeText(".toast-notification", msg, Toast.LENGTH_SHORT)
    .setPosition(Toast.POSITION_TOP_RIGHT)
    .setStyle(Toast[type])
    .show();
}
