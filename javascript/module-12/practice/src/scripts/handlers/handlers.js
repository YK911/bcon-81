import { refs } from '../refs';
import { hideLoadMoreBtn, showLoadMoreBtn } from '../render/loadMoreBtn';
import { renderProducts } from '../render/products';
import { fetchProducts } from '../services-api/products';

export async function handleCategories(event) {
  const categoryBtn = event.target.closest('.furniture-button');

  if (!categoryBtn) return;

  const { id } = categoryBtn;
  refs.productsList.innerHTML = '';
  showLoadMoreBtn();

  const { furnitures, totalItems, limit } = await fetchProducts(id);
  if (furnitures.length === 0) {
    console.log('Empty data');
    hideLoadMoreBtn();
    return;
  }

  if (totalItems < limit) {
    hideLoadMoreBtn();
  }

  renderProducts(furnitures, refs.productsList);
}

export async function handleLoadMoreClick() {}

export function handleProductDetails(event) {
  const detailsButton = event.target;

  const isDetailsButton =
    detailsButton.nodeName === 'BUTTON' &&
    detailsButton.classList.contains('js-products-btn');

  if (!isDetailsButton) return;

  const detailsCard = detailsButton.closest('.js-products-card');
  console.log('🚀 ~ handleProductDetails:', detailsCard);
}
