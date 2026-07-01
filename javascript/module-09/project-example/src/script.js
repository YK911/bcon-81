import { articles } from './scripts/getArticles';
import { renderArticles } from './scripts/renderArticles';

import imgPath from './img/vite-logo.png';

renderArticles(articles, '.js-articles');

console.log('🚀 ~ imgPath:', imgPath);
document.body.innerHTML += `<img src="${imgPath}" alt="">`;
