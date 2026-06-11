/*
 * Властивість innerHTML
 * - зчитування
 * - запис
 */

const titleEl = document.querySelector(".title");
console.log("🚀 ~ titleEl:", titleEl.innerHTML);
console.log("🚀 ~ titleEl:", titleEl.textContent);

titleEl.innerHTML = "";
titleEl.innerHTML = "Products list";

const listEl = document.querySelector(".js-list");

const liMarkup = "<li>Item</li>";

// for (let i = 0; i < 15; i++) {
//   setTimeout(
//     () => {
//       listEl.innerHTML += liMarkup;
//     },
//     1000 * i + 1
//   );
// }

//
// listEl.innerHTML += liMarkup;
// listEl.innerHTML += liMarkup;
// listEl.innerHTML += liMarkup;
// listEl.innerHTML += liMarkup;

const cars = [
  {
    id: 1,
    make: "Honda",
    model: "Civic",
    price: 10_000,
    imagePath:
      "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg",
  },
  {
    id: 2,
    make: "Honda",
    model: "CR-V",
    price: 20_000,
    imagePath:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.motortrend.com%2Fuploads%2F2022%2F09%2F2023-Honda-CR-V-EX-9.jpg&f=1&nofb=1&ipt=571f1814631bcb6eb95fecac9ddbb29ecaaaaca7e16bd95c83073c22fa29b59d",
  },
  {
    id: 3,
    make: "Honda",
    model: "Accord",
    price: 15_000,
    imagePath:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.slashgear.com%2Fimg%2Fgallery%2F2023-honda-accord-first-drive%2Fl-intro-1675809599.jpg&f=1&nofb=1&ipt=eae2d56889ad78a7957bc7807168e234dafc0844d85269b998fd7ba7e8a610c1",
  },
  {
    id: 4,
    make: "Honda",
    model: "Legend",
    price: 100_000,
    imagePath:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thedrive.com%2Fuploads%2F2023%2F08%2F22%2Fheader2-scaled.jpg%3Fauto%3Dwebp%26crop%3D16%3A9%26auto%3Dwebp%26optimize%3Dhigh%26quality%3D70%26width%3D1440&f=1&nofb=1&ipt=0210204002bd72498f7285a1ba7067f104000c14013eb357bbdedf4051154b3c",
  },
  {
    id: 5,
    make: "Honda",
    model: "Pilot",
    price: 50_000,
    imagePath:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.motortrend.com%2Fuploads%2F2023%2F10%2F002-2024-Honda-Pilot-Elite-front-three-quarters-in-action.jpg%3Fw%3D768%26width%3D768%26q%3D75%26format%3Dwebp&f=1&nofb=1&ipt=6778da1adac17599abf035f4c308e7c817fe30a0c9d6510c1e6090fba248b35a",
  },
];

const carsMarkup = createCarsMarkup(cars);
console.log("🚀 ~ carsMarkup:", carsMarkup);

function createCarsMarkup(cars = []) {
  return cars.map(createItemMarkup).join("");
}

function createItemMarkup(car) {
  return `
    <li class="cars-item">
        <img
          src="${car.imagePath}"
          alt="${car.make} ${car.model}"
        />

        <h3>Name: ${car.make} ${car.model}</h3>
        <p>Price: ${car.price}$</p>
    </li>`;
}

listEl.innerHTML = carsMarkup;

/*
 * Вставка розмітки за допомогою insertAdjacentHTML()
 */
listEl.insertAdjacentHTML(
  "afterbegin",
  carsMarkup
  //   createItemMarkup({
  //     id: 1,
  //     make: "Honda",
  //     model: "Civic",
  //     price: 10_000,
  //     imagePath:
  //       "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg",
  //   })
);
