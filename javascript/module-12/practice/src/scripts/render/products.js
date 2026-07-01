export function renderProducts(products = [], element) {
  const markup = products
    .map(({ _id, name, images, price, color }) => {
      return `<li class="products-card js-products-card" id="${_id}">
        <img class="products-ill" src="${images[0]}" alt="${name}" width="310" height="256"/>
        <div class="products-wrapper">
          <h3 class="products-title">${name}</h3>
          <ul class="products-variants">${renderProductVariants(color)}</ul>
          <p class="products-price">${price} грн</p>
        </div>
        <button class="btn btn-secondary js-products-btn" type="button">Детальніше</button>
      </li>`;
    })
    .join('');

  if (!element) return;

  element.innerHTML = markup;
}

function renderProductVariants(colors = []) {
  return colors
    .map(color => {
      return `<li class="products-variants-item" style="background-color: ${color}"></li>`;
    })
    .join('');
}
