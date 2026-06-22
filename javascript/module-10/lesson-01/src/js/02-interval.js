import "../common.css";

/*
 * Метод setInterval(callback, delay, args)
 */

const logger = time => {
  console.log(`Лог кожні ${time} мс - ${Date.now()}`);
};

console.log("До виклику setInterval");

// setInterval(logger, 1000, 1000);

console.log("Після виклику setInterval");

/*
 * Очищення інтервалу за допомогою clearInterval(intervalId)
 */

const intervalId = setInterval(logger, 2000, 2000);

setTimeout(
  time => {
    clearInterval(intervalId);
    console.log(`Скасовано через ${time} мс`);
  },
  5000,
  5000
);
