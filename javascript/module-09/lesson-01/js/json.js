const data = {
  name: "Mango",
  age: 18,
  isOnline: false,
};

const json = '{"name": "Mango", "age": 3, "isHappy": true}';
// console.log("🚀 ~ json:", json);
// console.log("🚀 ~ json:", typeof json);

const userInfo = JSON.parse(json);
// console.log("🚀 ~ userInfo:", userInfo);
// console.log("🚀 ~ userInfo:", typeof userInfo);

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

const carsJSON = JSON.stringify(cars);
// console.log("🚀 ~ carsJSON:", carsJSON);
// console.log("🚀 ~ carsJSON:", typeof carsJSON);

const audi = {
  id: 1,
  make: "Audi",
  model: "A6",
  price: 30000,
  getInfo() {
    console.log(`${this.make} ${this.model} costs ${this.price}`);
  },
};

const audiJSON = JSON.stringify(audi);
// console.log("🚀 ~ audiJSON:", audiJSON);

const str =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, velit.";

try {
  // cont name = "Poly" //! Compile time error

  console.log(JSON.parse(str));

  const number = 5;
  console.log("🚀 ~ number:", number);
} catch (error) {
  console.dir(error.name);
  if (error.name === "SyntaxError") {
    console.warn("Woooops 😅");
    // alert("Woooops 😅");
  }
} finally {
  console.log("Worked anywhere 😁");
}

console.log("Script after ERROR");
