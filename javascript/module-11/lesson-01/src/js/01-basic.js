import "../common.css";

/*
 * Основи запиту
 * - Fetch API
 * - URL запиту
 * - Владка Network
 * - Обробка відповіді response (404 з fetch)
 *
 * https://dummyjson.com/todos
 */

const TODOS_URL = "https://dummyjson.com/todos";

const list = document.querySelector(".todo-list");

// fetch(TODOS_URL).then(response => {
//   console.log(response);
// });

// fetch("https://dummyjson.com/posts")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Some error");
//     }

//     return response.json();
//   })
//   .then(data => {
//     console.log("🚀 ~ data:", data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

/**
 * Всередині функції запит, зовні обробка
 */
function fetchTodos() {
  return fetch(TODOS_URL).then(response => {
    if (!response.ok) {
      throw new Error("❌ error");
    }

    return response.json();
  });
}

fetchTodos()
  .then(({ todos }) => {
    //   console.log("🚀 ~ todos:", todos);
    renderTodos(todos);
  })
  .catch(error => {
    console.log("🚀 ~ error:", error);
  });

function renderTodos(todos = []) {
  const todosMarkup = todos
    .map(({ id, todo, completed }) => {
      return `<li class="${completed ? "completed" : ""}" id="${id}">${todo}</li>`;
    })
    .join("");
  // console.log("🚀 ~ renderTodos ~ todosMarkup:", todosMarkup);

  list.innerHTML = todosMarkup;
}
