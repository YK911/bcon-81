import data from '../db/data.json';

function getArticles(data) {
  return data.articles.map(({ title, description, url, urlToImage }) => {
    return { title, description, url, urlToImage };
  });
}

export const articles = getArticles(data);
