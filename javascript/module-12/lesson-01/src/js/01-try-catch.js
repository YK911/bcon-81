import axios from "axios";
import "../common.css";

/**
 * Обробка помилок з try...catch
 *
 * - Синтаксис
 * - Які помилки ловить
 *  - ❌ помилки парсингу (parsing errors)
 *  - ✅ помилки виконання (runtime errors)
 * - Ловить лише помилки в синхронному коді
 * - Як зловити помилку в асинхронному коді
 * - Об'єкт помилки
 *  - name
 *  - message
 *  - stack
 * - Блок catch без об'єкта помилки
 */
const btnEl = document.querySelector(".js-btn");

const BASE_URL = "https://jsonplaceholder.typicode.com/tdos";
const fetchTodos = async () => {
  try {
    const { data } = await axios.get(BASE_URL);
    return data;
  } catch (error) {
    console.log("🚀 ~ fetchTodos ~ error:", error);
  }

  console.log("After try...catch");
};

btnEl.addEventListener("click", fetchTodos);

console.log("After fetchTodos");

// setTimeout(() => {
//   console.log("Post After fetchTodos");
// }, 1500);
