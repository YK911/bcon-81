export function renderArticles(articles = [], el = '') {
  el = document.querySelector(el);

  if (el) {
    el.innerHTML = articles.map(createArticle).join('');
  }
}

function createArticle({ title, description, url, urlToImage }) {
  return `
    <li>
        <img src="${urlToImage}" alt="${title}"/>
        <h3>${title}</h3>
        <p>${description}</p>

        <a href="${url}">Read more</a>
    </li>
    `;
}
