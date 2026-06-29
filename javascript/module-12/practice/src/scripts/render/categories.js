export function renderCategories(categories = [], element) {
  const markup = categories
    .map(({ _id, name }) => {
      return `<li class="furniture-item">
        <button class="furniture-button" type="button" id="${_id}">
          ${name}
        </button>
      </li>`;
    })
    .join('');

  if (!element) return;

  element.innerHTML = markup;
}
