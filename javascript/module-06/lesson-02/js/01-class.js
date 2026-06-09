/*
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */
// ? Процедурне програмування vs Обʼєктно орієнтоване програмування
const baseSalary = 20_000;
const overtime = 10;
const rate = 20;

function getMounthSalary(baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
}

const mounthSalary = getMounthSalary(baseSalary, overtime, rate);
// console.log("🚀 ~ mounthSalary:", mounthSalary);

const employee = {
  baseSalary: 20_000,
  overtime: 10,
  rate: 20,

  getMounthSalary() {
    return this.baseSalary + this.overtime * this.rate;
  },
};
// console.log("🚀 ~ employee:", employee.baseSalary);
// console.log("🚀 ~ employee:", employee.getMounthSalary());

/* ====================== */

class Car {
  //   description = "This is class Car for redCar";
  description;
  brand;
  model;

  #fuelLevel;
  static carsCounter = 0;

  constructor({ carType = "type", brand, model, price } = {}) {
    this.description = `This is class Car for ${carType}`;
    this._brand = brand;
    this._model = model;
    if (this.checkPrice(price)) {
      this.price = price;
    }

    this.#fuelLevel = 0;
    this.isEngineStart = false;
    this.dashboard = {
      emptyTank: true,
      alert: "",
      maxTankCapacity: 60,
    };

    Car.updateCarsCounter();
  }

  get fuelLevel() {
    return this.#fuelLevel;
  }

  set fuelLevel(newFuleLevel) {
    if (
      newFuleLevel > 0 &&
      this.#fuelLevel + newFuleLevel <= this.dashboard.maxTankCapacity
    ) {
      this.#fuelLevel += newFuleLevel;
    }
  }

  checkPrice(price) {
    return price > 0 && typeof price === "number";
  }

  startEngine() {
    if (this.fuelLevel > 0) {
      this.isEngineStart = !this.isEngineStart;
      this.dashboard.emptyTank = false;
    } else {
      this.dashboard.alert = "No fuel Please, fill your tank";
      console.warn("No fuel Please, fill your tank");
    }
  }

  static updateCarsCounter() {
    Car.carsCounter += 1;
  }
}

const redCarOptions = {
  model: "Accord",
  //   carType: "red car",
  brand: "Honda",
  price: -20000,
};

console.log("carsCounter:", Car.carsCounter);

const redCar = new Car(redCarOptions); // -> {description: ""}
redCar.startEngine();

// redCar.fuelLevel = 60;
console.log(redCar.fuelLevel);
redCar.fuelLevel = 20;
redCar.fuelLevel = 20;
redCar.fuelLevel = 30;
console.log(redCar.fuelLevel);
console.log("🚀 ~ redCar:", redCar);

const blueCar = new Car(redCarOptions);
// console.log("🚀 ~ blueCar:", blueCar);

const orangeCar = new Car(redCarOptions);
// console.log("🚀 ~ orangeCar:", orangeCar);
console.log("carsCounter:", Car.carsCounter);
