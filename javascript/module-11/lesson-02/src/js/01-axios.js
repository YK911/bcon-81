import axios from "axios";
import "../common.css";

/**
 * Додаємо та використовуємо бібліотеку https://axios-http.com/
 * Робимо рефакторинг
 * - Імпорт
 * - Запит
 * - Метод axios.get
 * - Обробка відповіді та помилки
 */

const list = document.querySelector(".todo-list");

fetch("https://jsonplaceholder.typicode.com/tdos")
  .then(response => {
    console.log("🚀 ~ fetch response:", response);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    // console.log(data);
    // Рендер елементів в DOM (map і insertAdjacentHTML)
  })
  .catch(error => {
    console.log("🚀 ~ fetch error:", error);
  });

/**
 * Всередині функції запит, зовні обробка
 */
const fetchTodos = () => {
  return axios.get("https://jsonplaceholder.typicode.com/tdos");
};

fetchTodos()
  .then(response => {
    console.log("🚀 ~ axios response:", response);
  })
  .catch(error => {
    console.log("🚀 ~ axios error:", error);
  });
