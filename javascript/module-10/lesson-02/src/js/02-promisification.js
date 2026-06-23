import "../common.css";

/*
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */
// const makeOrder = (dish, onSuccess, onError) => {
//   const passed = Math.random() > 0.5;

//   setTimeout(() => {
//     if (passed) {
//       onSuccess(`✅ Ваше замовлення: ${dish}`);
//       return;
//     }

//     onError("❌ Упс, у нас закінчилися продукти");
//   }, 1000);
// };

// makeOrder(
//   "пиріжок",
//   result => {
//     console.log("onMakeOrderSuccess");
//     console.log(result);
//   },
//   error => {
//     console.log("onMakeOrderError");
//     console.log(error);
//   }
// );

const makeOrder = dish => {
  const passed = Math.random() > 0.5;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (passed) {
        resolve(`✅ Ваше замовлення: ${dish}`);
      }
      reject("❌ Упс, у нас закінчилися продукти");
    }, 1000);
  });
};

// makeOrder("Пиріжок")
//   .then(result => {
//     console.log("🚀 ~ result:", result);
//   })
//   .catch(error => {
//     console.log("🚀 ~ error:", error);
//   });
/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

// const prepareDish = (dish, onSuccess, onError) => {
//   const passed = Math.random() > 0.5;

//   if (passed) {
//     onSuccess(`✅ Ваше замовлення: ${dish}`);
//     return;
//   }

//   onError("❌ Упс, у нас закінчилися продукти");
// };

// prepareDish(
//   "пиріжок",
//   result => {
//     console.log("onMakeOrderSuccess");
//     console.log(result);
//   },
//   error => {
//     console.log("onMakeOrderError");
//     console.log(error);
//   }
// );

// const prepareDish = dish => {
//   const passed = Math.random() > 0.5;

//   if (passed) {
//     return Promise.resolve(`✅ Ваше замовлення: ${dish}`);
//   }

//   return Promise.reject("❌ Упс, у нас закінчилися продукти");
// };
// prepareDish("пиріжок")
//   .then(result => {
//     console.log("🚀 ~ result:", result);
//   })
//   .catch(error => {
//     console.log("🚀 ~ error:", error);
//   });

function getRecipes(url = "") {
  return fetch(url).then(response => {
    if (response.ok === false) {
      throw new Error("No data");
    }

    return response.json();
  });
}

// getRecipes("https://dummyjson.com/recipes")
//   .then(data => {
//     console.log(data);
//     return data.recipes;
//   })
//   .then(recipes => {
//     renderRecipesMarkup(recipes);
//   })
//   .catch(error => {
//     console.log(error.message);
//   });

// fetch("https://dummyjson.com/recipes")
//   .then(res => res.json())
//   .then(console.log);

function renderRecipesMarkup(recipes = []) {
  return recipes
    .map(recipe => {
      return "some recipe";
    })
    .join("");
}

const urls = [
  "https://dummyjson.com/recipes",
  "https://dummyjson.com/carts",
  "https://dummyjson.com/users",
];

// const result = urls.map(url => fetch(url));
// console.log("🚀 ~ result:", result);
// Promise.all(result).then(res => {
//   console.log(res);
// });

// const fetchData = url => {
//   return fetch(url).then(response => {
//     return response.json();
//   });
// };

// fetchData(urls[0]).then(result => {
//   console.log(result);

//   fetchData(urls[1]).then(result => {
//     console.log("🚀 ~ result:", result);

//     fetchData(urls[2]).then(data => {
//       console.log("🚀 ~ data:", data);
//     });
//   });
// });

const imageSizes = [150, 200, 250, 300];

const promises = imageSizes.map(size => {
  return fetch(`https://dummyjson.com/image/${size}`).then(response => {
    return response.blob();
  });
});

Promise.allSettled(promises).then(response => {
  const blobToText = response.map(({ status, value }) => {
    return value.text();
  });

  Promise.all(blobToText).then(data => {
    console.log(data);
  });
});

// Promise.race(promises).then(fastest => {
//   console.log("🚀 ~ fastest:", fastest);
// });
