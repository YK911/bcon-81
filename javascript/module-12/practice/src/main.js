import { refs } from './scripts/refs';
import { fetchCategories } from './scripts/services-api/category';
import { renderCategories } from './scripts/render/categories';
import { fetchProducts } from './scripts/services-api/products';
import { renderProducts } from './scripts/render/products';
import { showLoadMoreBtn, hideLoadMoreBtn } from './scripts/render/loadMoreBtn';
import { handleCategories } from './scripts/handlers/handlers';

init();

async function init() {
  const categories = await fetchCategories();
  renderCategories(categories, refs.furnitureCategories);

  const { furnitures } = await fetchProducts('all');
  renderProducts(furnitures, refs.productsList);
  showLoadMoreBtn();

  refs.furnitureCategories.addEventListener('click', handleCategories);
}
