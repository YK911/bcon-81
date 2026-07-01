import { refs } from '../refs';
export function showLoadMoreBtn() {
  refs.loadMoreBtn.classList.remove('hidden');
}
export function hideLoadMoreBtn() {
  refs.loadMoreBtn.classList.add('hidden');
}
