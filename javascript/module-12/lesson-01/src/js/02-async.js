import axios from "axios";
import "../common.css";

/**
 * Синтаксис async/await
 * try...catch
 */

// const fetchTodos = () => {
//   return axios
//     .get("https://jsonplaceholder.typicode.com/todos")
//     .then(response => response.data);
// };

// fetchTodos()
//   .then(data => console.log("Todos:", data))
//   .catch(error => console.error("Помилка отримання Todos:", error));

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";
const USERS_URL = "https://jsonplaceholder.typicode.com/users";

// ??? Використання try...catch
// const fetchTodos = async () => {
//   try {
//     const { data } = await axios.get(BASE_URL);

//     console.log("🚀 ~ fetchTodos ~ data:", data);
//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// debugger;
// fetchTodos();

// ??? Без використання try...catch
const fetchTodos = async () => {
  try {
    const { data } = await axios.get(BASE_URL);
    console.log("🚀 ~ fetchTodos ~ data:", data);
    return data;
  } catch (error) {
    handlefetchError();
  }
};

// fetchTodos().then(onResolve).catch(onReject);
function onResolve() {
  console.log("Happy. Can access data");
}
function onReject() {
  console.log("Sad. Data unavailable");
}

// async function fetchUsers() {
//   const response = await axios.get(USERS_URL);

//   if (response.status === 200) {
//     return response.data;
//   }
// }

// const commentsObj = {
//   comments: null,

//   async fetchComments() {
//     const response = await axios.get("");
//     return response.data;
//   },
// };

// class Photos {
//   async getPhotos() {
//     const response = await axios.get("");
//     return response.data;
//   }
// }

// const response = await axios.get(BASE_URL);

// fetchTodos().then().catch();
