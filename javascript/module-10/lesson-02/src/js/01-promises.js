import "../common.css";

/*
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

// const promise = new Promise((resolve, reject) => {
//   //   resolve("Проміс виконався успішно, із результатом (виконаний, fulfilled)");
//   //   reject("Проміс виконався з помилкою (відхилений, rejected)");
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve(
//         "Проміс виконався успішно, із результатом (виконаний, fulfilled)"
//       );
//     } else {
//       reject("Проміс виконався з помилкою (відхилений, rejected)");
//     }
//   }, 3000);
// });

// console.log(promise);

// promise
//   .then(answer => {
//     console.log(answer);
//   })
//   .catch(error => {
//     console.log("Inside catch method");
//     console.log(error);
//   });

// promise.then(onResolve).catch(onReject);

// function onResolve(result) {
//   console.log("🚀 ~ onResolve ~ result:", result);
// }

// function onReject(error) {
//   console.log("🚀 ~ onReject ~ error:", error);
// }

// "Проміс виконався успішно, із результатом (виконаний, fulfilled)";
// "Проміс виконався з помилкою (відхилений, rejected)"

const promise = new Promise((resolve, reject) => {
  const id = setInterval(() => {
    const isSuccess = Math.random() > 0.5;
    console.log("🚀 ~ isSuccess:", isSuccess);

    if (isSuccess) {
      resolve({ numbers: [111, 222, 333, 444] });
      clearInterval(id);
    }
  }, 1000);
});

// promise
//   .then(data => {
//     console.log(data);
//     const result = data.numbers.reduce((acc, item) => {
//       acc.push(item * 2);

//       return acc;
//     }, []);
//     console.log("🚀 ~ result:", result);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// fetch("https://dummyjson.com/image/150")
//   .then(response => {
//     console.log(response);
//   })
//   .catch(() => {});

// console.log("Synchronous");

/*
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */
let result1 = null;

promise
  .then(({ numbers }) => {
    return numbers.map(number => number * 2);
  })
  .then(result => {
    console.log(result);

    result1 = result;
    return result1;
  })
  .then(anotherResult => {
    console.log("🚀 ~ anotherResult:", anotherResult);

    // return undefined
  })
  .then(whatInParam => {
    console.log("🚀 ~ whatInParam:", whatInParam);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    console.log("Works last");
  });

console.log(result1);
