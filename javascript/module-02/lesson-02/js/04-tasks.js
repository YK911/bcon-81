/*
 * Напиши цикл for, який виводить у консоль браузера
 * числа за зростанням від a до b, але тільки якщо число кратне 5.
 */

const a = 100;
const b = 23;

// const min = Math.min(a, b);
// console.log("🚀 ~ min:", min);
// const max = Math.max(a, b);
// console.log("🚀 ~ max:", max);

// const start = min + (5 - (min % 5));

// for (let i = start; i < max; i += 5) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

/*
 * Напиши скрипт, який підраховує суму всіх парних чисел,
 * які входять в діапазон чисел у змінних від min до max.
 * Наприклад, якщо min=0 і max=5, то діапазон 0-5, і в ньому два парних числа - 2 і 4, їх сума 6.
 */

// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i++) {
//   if (i % 2 !== 0) {
//     total += i;
//   }
// }

// console.log(total);

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

// console.log("\n");

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }

function findNumber(numberToFind, start, end) {
  const total = 10;

  for (let i = start; i <= end; i++) {
    if (i === numberToFind) {
      console.log(`Число ${numberToFind} входить в діапазон ${start} - ${end}`);
      return;
      //   break;
    }

    console.log("🚀 ~ findNumber ~ i:", i);
  }

  console.log(total);
  return total;
}

// findNumber(3, 0, 10);
