import "../common.css";

/*
 * Метод window.setTimeout(callback, delay, args)
 */
// const btn = document.querySelector(".js-btn");
// console.log("До виклику setTimeout");

// setTimeout(() => {
//   console.log("1 - Всередині зворотного виклику для setTimeout");
// }, 0);

// const arr = Array(1_000_000).fill(1);
// console.time("Cycle");
// for (let i = 0; i < 100_000; i++) {
//   arr[i] = i ** 2;
// }
// console.timeEnd("Cycle");

// btn.addEventListener("click", event => {
//   console.log("Show click");
// });

// console.log("2 - Всередині зворотного виклику для setTimeout");

// console.log("Після виклику setTimeout");

/*
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */
const logger = time => {
  console.log(`Лог через ${time} мс, оскільки не скасували таймаут`);
};

// const timeoutId = setTimeout(logger, 2000, 2000);
// console.log("🚀 ~ timeoutId:", timeoutId);

// setTimeout(
//   ms => {
//     console.log(`Скасування попереднього таймауту через ${ms} мс`);

//     clearTimeout(timeoutId);
//   },
//   1000,
//   1000
// );

/**
 * Можливість передати параметри для колбеку
 */
const id = setTimeout(
  ({ name, country }) => {
    console.log(`Hello, my name is ${name}, I'm from ${country}`);
  },
  1000,
  { name: "Mango", country: "Kyiv" }
);
