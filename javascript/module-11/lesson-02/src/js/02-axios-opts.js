import axios from "axios";
import "../common.css";

/*
 * Робимо рефакторинг авторизації запитів з ключами
 *
 * Як у Axios передавати search params та headers
 *
 * Для прикладу використовуємо https://thecatapi.com/
 *
 */
// axios.defaults.baseURL = "https://dummyjson.com";

const fetchCarts = () => {
  return axios.get("/carts");
};
const fetchRecipes = () => {
  return axios.get("/recipes");
};
const fetchUsers = () => {
  return axios.get("/users");
};

// fetchCarts().then(({ data }) => {
//   console.log("🚀 ~ data:", data);
// });
// fetchRecipes().then(({ data }) => {
//   console.log("🚀 ~ data:", data);
// });

// ??? CatAPI
axios.defaults.baseURL = "https://api.hecatapi.com/v1";
axios.defaults.headers["x-api-key"] = import.meta.env.VITE_API_KEY;

const fetchCats = () => {
  const options = {
    params: {
      limit: 10,
      breed_ids: "beng",
    },
  };

  return axios.get("/images/search", options);
};

fetchCats()
  .then(({ data }) => {
    console.log("🚀 ~ cats data:", data);
  })
  .catch(({ message }) => {
    console.log("🚀 ~ error:", message);
  });
