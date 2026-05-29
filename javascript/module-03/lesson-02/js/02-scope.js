/*
 * - Глобальна область видимості
 * - Блочна область видимості
 * - Пошук за ланцюжком областей видимості
 */
const globalValue = 10;

// console.log(globalValue); // 10

function foo() {
  const a = 111;

  console.log(globalValue);

  for (let i = 0; i < 5; i += 1) {
    console.log(a);

    if (i === 2) {
      const name = "John";
      const a = 999;
      console.log(a);
      console.log(globalValue);
    }
  }
}

foo();
// ❌ Помилка! Змінна a не доступна в цій області видимості

for (let i = 0; i < 3; i += 1) {
  // ❌ Помилка! Змінна a не доступна в цій області видимості
  // console.log(a);
}

// console.log(a);
