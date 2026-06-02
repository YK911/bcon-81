// "use strict";

// function changeName(newName) {
//   // let newName
//   // arguments = []
//   // this = {} -> coffeMachine

//   this.name = newName;

//   // return undefined
// }

// window.changeName();
// changeName();

// const coffeMachine = {
//   name: "Philips",
//   model: "001",
//   capacity: 0.5,

//   rename: changeName,
// };

// coffeMachine.rename = changeName;
// console.log("🚀 ~ coffeMachine:", coffeMachine);
// coffeMachine.rename("Delonghi");
// console.log("🚀 ~ coffeMachine:", coffeMachine);

const truck = {
  weight: 1500,
  fuelTank: 200,
  currentFuelLevel: 0,
  make: "Ukraine",
  model: "Kozak 2000",

  loadFuel(fuelCapacity) {
    // arguments = []
    // params = ??
    // this -> truck

    if (fuelCapacity > this.fuelTank) {
      return "fuelTank is full";
    }

    this.currentFuelLevel += fuelCapacity;
    // return undefined
  },
};

truck.loadFuel(20);
// console.log("🚀 ~ truck:", truck);
