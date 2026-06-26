import axios from "axios";
import "./config";
import "bootstrap/dist/css/bootstrap.min.css";

const refs = {
  breedSelect: document.querySelector(".js-breed-select"),
  catCard: document.querySelector(".js-cat-card"),
  spinner: document.querySelector(".js-spinner"),
};

const fetchBreeds = () => {
  return axios.get("/breeds");
};
const fetchCatInfo = (id = "") => {
  return axios.get(`/breeds/search?q=${id}`);
};

const createBreedOption = ({ id, name }) => {
  return `<option value=${id}>${name}</option>`;
};
const renderBreeds = (breeds = []) => {
  const optionsMarkup = breeds.map(createBreedOption).join("");
  refs.breedSelect.insertAdjacentHTML("beforeend", optionsMarkup);
};
const renderCatCard = ({ name, description, image }) => {
  const catMarkup = `
    <article class="card">
        <img class="card-img-top" src="${image.url}" alt="${name}" width="286" height="214"/>
        <div class="card-body">
            <h2 class="display-5">${name}</h2>
            <p class="card-text">${description}</p>
        </div>
    </article>`;

  refs.catCard.innerHTML = catMarkup;
};

const showSpinner = () => {
  refs.spinner.classList.remove("hide");
};
const hideSpinner = () => {
  refs.spinner.classList.add("hide");
};

const handleBreedSelect = event => {
  const breedName = event.target.selectedOptions[0].textContent;
  refs.catCard.innerHTML = "";
  showSpinner();

  fetchCatInfo(breedName)
    .then(({ data }) => {
      renderCatCard(data[0]);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hideSpinner();
    });
};

// Usage
fetchBreeds().then(({ data }) => {
  renderBreeds(data);
});

refs.breedSelect.addEventListener("change", handleBreedSelect);
