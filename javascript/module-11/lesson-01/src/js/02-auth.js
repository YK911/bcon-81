import "../common.css";

/*
 * Авторизація запитів з ключами
 * Які бувають:
 * - у query string
 * - у хедерах
 *
 * Для прикладу використовуємо https://thecatapi.com/
 */

const API_KEY =
  "live_l04vokWs8d2RAPJS5bi3tkFB1jk75SXGVi8XKPG0BFZf5RWuSRjlK9YnvK3pgUEF";

const searchParams = new URLSearchParams({
  //   api_key: API_KEY,
  breed_ids: "beng",
  limit: 10,
});

const headers = new Headers({
  "x-api-key": API_KEY,
  "Content-Type": "application/json",
});

const BASE_URL = `https://api.thecatapi.com/v1/images/search?${searchParams}`;

function fetchCatsInfo() {
  const options = {
    method: "GET",
    headers,
  };

  return fetch(BASE_URL, options).then(response => {
    if (!response.ok) {
      throw new Error("");
    }

    return response.json();
  });
}

// fetchCatsInfo().then(data => {
//   console.log("🚀 ~ data:", data);
// });

//? News API

const refs = {
  searchForm: document.querySelector(".search-form"),
  newsList: document.querySelector(".news-list"),
};

// const NEWS_URL = "https://newsapi.org/v2/everything";
const NEWS_URL = "/news-api/v2/everything";
const newsKey = import.meta.env.VITE_NEWS_KEY;

refs.searchForm.addEventListener("submit", handleSearchForm);

function handleSearchForm(event) {
  event.preventDefault();

  const form = event.target;

  const {
    searchQuery: { value },
  } = form.elements;

  if (value.trim().length === 0) {
    alert("Fill search input");
    return;
  }

  fetchNews(value)
    .then(news => {
      console.log(news);
    })
    .catch(error => {
      console.log(error);
    });

  form.reset();
}

function fetchNews(q) {
  const params = new URLSearchParams({
    q,
    apiKey: newsKey,
    searchIn: "title",
    language: "en",
    pageSize: 10,
    page: 1,
  });

  return fetch(`${NEWS_URL}?${params}`).then(response => {
    console.log("🚀 ~ fetchNews ~ response:", response);
    if (!response.ok) {
      throw new Error("");
    }

    return response.json();
  });
}

/*
 * З 2024–2025 років NewsAPI заблокував прямі запити з frontend-додатків для безкоштовних акаунтів (CORS-захист), вимагаючи використання HTTPS у поєднанні з серверною розробкою, або переходу на платний тариф. Вони хочуть, щоб ви робили запити через свій backend, а не напряму з JS-коду в браузері (щоб не "світити" ваш apiKey).
 */
