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
  container: document.querySelector(".js-list"),
  dropdown: document.querySelector(".js-dropdown"),
};
