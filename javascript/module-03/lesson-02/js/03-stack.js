/*
 * - Стек викликів
 * - Порядок виконання
 */

function fnA() {
  const aa = 111;
  console.log("fnA execution");

  return function fnB() {
    const bb = 222;
    console.log("fnB execution");
    console.log(aa);

    fnC();
  };
}

// function fnB() {
//   const bb = 222;
//   console.log("fnB execution");
//   console.log(aa);

//   fnC();
// }

function fnC() {
  const cc = 333;
  console.log("fnC execution");

  // return true
}

// console.log("Before fnA execution");
// const fnBB = fnA();
// fnBB();
// console.log("After fnA execution");

// console.log("Before fnB execution");
// fnB();
// console.log("After fnB execution");

// console.log("Before fnC execution");
// fnC();
// console.log("After fnC execution");

function hireShief(shiefName) {
  let time = 30;
  if (shiefName === "") return;

  return function (dishName) {
    // function prepareDish(dishName) {
    console.log(`${shiefName} prepare ${dishName} for ${time} minutes`);
  };
}

// const makeDish = hireShief("Mango");
// makeDish("Scrumbled eggs");
// makeDish("Smashed potato");

// const polyMakeDish = hireShief("Poly");
// polyMakeDish("Sour soup");

// const ajaxMakeDish = hireShief("Ajax");
// ajaxMakeDish("Carrot pie");

// const kiwiMakeDish = hireShief("Kiwi");
// kiwiMakeDish("Krab pasties");
