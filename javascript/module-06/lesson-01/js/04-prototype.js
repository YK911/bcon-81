/*
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

const animal = {
  legs: 4,
};
// console.log("🚀 ~ animal:", animal);

const dog = Object.create(animal);
dog.action = "Apport";

const mangoDog = Object.create(dog);
mangoDog.nickname = "Mango";
mangoDog.color = "black";
mangoDog.breed = "mops";

// console.log("🚀 ~ mangoDog:", mangoDog);

// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.hasOwnProperty("name"));
// console.log(dog.hasOwnProperty("legs"));

// for (const key in mangoDog) {
//   if (mangoDog.hasOwnProperty(key)) {
//     console.log(key); // "nickname"
//   }
// }

// const keysMangoDog = Object.keys(mangoDog);
// console.log("🚀 ~ keysMangoDog:", keysMangoDog);

// for (const key of keysMangoDog) {
//   const value = mangoDog[key];
//   console.log("🚀 ~ value:", value);
// }

/**
 * ----------------------------------------
 */
const objC = { c: "objC prop", a: "Surprise, Surprise" };

const objB = Object.create(objC);
objB.b = "objB prop";

const objA = Object.create(objB);
objA.a = "objA prop";

// console.log(objA);
// console.log(objB);
// console.log(objC);

// console.log(objA.hasOwnProperty("a"));
// console.log(objA.a);

// console.log(objA.hasOwnProperty("b"));
// console.log(objA.b);

// console.log(objA.hasOwnProperty("c"));
// console.log(objA.c);

// console.log(objA.hasOwnProperty("x"));
// console.log(objA.x);

class OwnObj {
  a = 10;
  b = 20;

  constructor(paramA, paramB) {
    console.log("Invoke with new operator");
    console.log(this);
    this.x = paramA;
    this.y = paramB;
  }

  print() {
    const values = Object.values(this);
    let output = "";

    for (let i = 0; i < values.length; i += 1) {
      output += `${i + 1} - ${values[i]} \n`;
    }

    console.log(output);
  }
}

// const myObj = new OwnObj(111, 222);
// console.log("🚀 ~ myObj:", myObj);
// myObj.print();

// const myObjKeys = Object.keys(myObj);
// console.log("🚀 ~ myObjKeys:", myObjKeys);

// const anotherObj = new OwnObj(999, 888);
// anotherObj.print();
// console.log("🚀 ~ anotherObj:", anotherObj);
