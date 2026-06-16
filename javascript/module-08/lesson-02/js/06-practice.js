/*
 * Реалізуй пошук автомобілів по сайту
 * Користувач потрапляє на сайт і одразу бачить форму для пошуку і картки всіх автомобілів (масив cars)
 * Користувач може ввести в форму назву Марки або Моделі авто і в тегу селект обрати що він ввів Марку або Модель
 * Після натискання кнопки пошуку (сабміт форми) відмалюй авто які збігаються з критеріями пошуку
 */

const cars = [
  {
    id: 1,
    make: "Audi",
    model: "A6",
    price: 30000,
    thumbnail:
      "https://images.pexels.com/photos/17888846/pexels-photo-17888846.jpeg?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
    description:
      "An elegant and dynamic business sedan that combines premium comfort, advanced digital technologies and the brand's quattro all-wheel drive system for confident driving in all conditions.",
    images: [
      "https://images.pexels.com/photos/17888846/pexels-photo-17888846.jpeg?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
      "https://images.pexels.com/photos/17888846/pexels-photo-17888846.jpeg?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
      "https://images.pexels.com/photos/17888846/pexels-photo-17888846.jpeg?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
      "https://images.pexels.com/photos/17888846/pexels-photo-17888846.jpeg?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
    ],
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    price: 12000,
    thumbnail:
      "https://images.pexels.com/photos/16475137/pexels-photo-16475137.jpeg?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
    description:
      "A reliable and economical compact car with a distinctly sporty character. Ideal for everyday city driving thanks to its sharp handling and ergonomic interior.",
    images: [
      "https://images.pexels.com/photos/16475137/pexels-photo-16475137.jpeg?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
      "https://images.pexels.com/photos/16475137/pexels-photo-16475137.jpeg?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
      "https://images.pexels.com/photos/16475137/pexels-photo-16475137.jpeg?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
      "https://images.pexels.com/photos/16475137/pexels-photo-16475137.jpeg?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
    ],
  },
  {
    id: 3,
    make: "Audi",
    model: "Q7",
    price: 40000,
    thumbnail:
      "https://images.pexels.com/photos/17264100/pexels-photo-17264100.jpeg?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
    description:
      "A full-size premium crossover offering uncompromising space, luxurious materials and high off-road capability. A great choice for comfortable family trips of any distance.",
    images: [
      "https://images.pexels.com/photos/17264100/pexels-photo-17264100.jpeg?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
      "https://images.pexels.com/photos/17264100/pexels-photo-17264100.jpeg?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
      "https://images.pexels.com/photos/17264100/pexels-photo-17264100.jpeg?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
      "https://images.pexels.com/photos/17264100/pexels-photo-17264100.jpeg?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
    ],
  },
  {
    id: 4,
    make: "BMW",
    model: "5 series",
    price: 9000,
    thumbnail:
      "https://images.pexels.com/photos/25691078/pexels-photo-25691078.png?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
    description:
      "A legendary representative of the German automotive industry, where the emphasis is on driver emotions and impeccable handling. It combines a strict business style and powerful technical characteristics.",
    images: [
      "https://images.pexels.com/photos/25691078/pexels-photo-25691078.png?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
      "https://images.pexels.com/photos/25691078/pexels-photo-25691078.png?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
      "https://images.pexels.com/photos/25691078/pexels-photo-25691078.png?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
      "https://images.pexels.com/photos/25691078/pexels-photo-25691078.png?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
    ],
  },
  {
    id: 5,
    make: "Honda",
    model: "Accord",
    price: 20000,
    thumbnail:
      "https://images.pexels.com/photos/29280440/pexels-photo-29280440.jpeg?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
    description:
      "A comfortable mid-range sedan known for its high reliability, spacious interior, and excellent ride quality. Equipped with modern safety and driver assistance systems.",
    images: [
      "https://images.pexels.com/photos/29280440/pexels-photo-29280440.jpeg?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
      "https://images.pexels.com/photos/29280440/pexels-photo-29280440.jpeg?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
      "https://images.pexels.com/photos/29280440/pexels-photo-29280440.jpeg?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
      "https://images.pexels.com/photos/29280440/pexels-photo-29280440.jpeg?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
    ],
  },
  {
    id: 6,
    make: "Volvo",
    model: "XC60",
    price: 7000,
    thumbnail:
      "https://images.pexels.com/photos/15709337/pexels-photo-15709337.jpeg?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
    description:
      "A Scandinavian crossover that sets the standard for automotive safety. It offers a discreet premium design, a cozy interior made of high-quality materials, and balanced driving performance.",
    images: [
      "https://images.pexels.com/photos/15709337/pexels-photo-15709337.jpeg?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
      "https://images.pexels.com/photos/15709337/pexels-photo-15709337.jpeg?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
      "https://images.pexels.com/photos/15709337/pexels-photo-15709337.jpeg?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
      "https://images.pexels.com/photos/15709337/pexels-photo-15709337.jpeg?auto=compress&cs=tinysrgb&w=800&h=533&fit=crop",
    ],
  },
];

const elements = {
  form: document.querySelector(".js-form"),
  carsList: document.querySelector(".js-list"),
  dropdown: document.querySelector(".js-dropdown"),
  modalInfo: document.querySelector(".modal-body"),
};
let {
  dataset: { value: optionType },
} = elements.dropdown.querySelector("button.dropdown-item");

renderCarsMarkup(elements.carsList, cars);

elements.form.addEventListener("submit", handleFormSubmit);
elements.dropdown.addEventListener("click", handleDropDownClick);
elements.carsList.addEventListener("click", handleMoreInfoClick);

//* Functions
function createCarMarkup({ id, thumbnail, make, model, price } = {}) {
  return `<li class="col-4 mb-4 car-item" id="${id}">
            <div class="card hover-up">
              <img
                class="card-img-top"
                src="${thumbnail}"
                alt="${make} ${model}"
              />
              <div class="card-body row">
                <div class="col-8">
                  <h5 class="col card-title">${make} ${model}</h5>
                  <p class="col card-text">${price} $</p>
                </div>
                <button
                  class="col-4 btn btn-outline-primary"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  More info
                </button>
              </div>
            </div>
          </li>`;
}

function createModalMarkup({ images, make, model, price, description } = {}) {
  return ` <div class="left">
              ${images
                .map(img => `<img src="${img}" alt="${make} ${model}" />`)
                .join("")}
            </div>
            <div class="right">
              <h3>${make} ${model}</h3>
              <p>Price: ${price}$</p>
              <hr />
              <p>${description}</p>
            </div>`;
}

function renderCarsMarkup(el, cars = []) {
  el.innerHTML = cars.map(createCarMarkup).join("");
}

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const {
    query: { value: searchQuery },
  } = form.elements;

  if (searchQuery.trim().length === 0) {
    alert("Please, fill search input");
    renderCarsMarkup(elements.carsList, cars);
    form.reset();
    return;
  }

  const filteredCars = searchCars(searchQuery, optionType);
  renderCarsMarkup(elements.carsList, filteredCars);

  form.reset();
}

function handleDropDownClick(event) {
  const targetEl = event.target;

  if (targetEl.nodeName !== "BUTTON") return;

  optionType = targetEl.dataset.value;
}

function handleMoreInfoClick(event) {
  const targetEl = event.target;

  if (targetEl.nodeName !== "BUTTON") return;

  const carId = Number(targetEl.closest(".car-item").id);
  const currentCarInfo = cars.find(({ id }) => {
    return id === carId;
  });
  elements.modalInfo.innerHTML = createModalMarkup(currentCarInfo);
}

function searchCars(searchQuery, type) {
  return cars.filter(car => {
    const carType = car[type].toLowerCase();
    searchQuery = searchQuery.toLowerCase();

    return carType.includes(searchQuery);
  });
}
