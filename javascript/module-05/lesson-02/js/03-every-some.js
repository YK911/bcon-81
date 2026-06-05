const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: false },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
];

// console.table(players);

/*
 * Метод every
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо всі елементи масиву задовольняють умову
 */
const isAllOnline = players.every((player, idx, arr) => {
  return player.online;
});
// console.log("isAllOnline: ", isAllOnline);

const isAllPlay100Hours = players.every((player, idx) => {
  // console.log(idx + 1);

  return player.timePlayed > 100;
});
// console.log("🚀 ~ isAllPlay100Hours:", isAllPlay100Hours);

/*
 * Метод some
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо хоча б один елемент масиву задовольняє умову
 */
// const isAnyOnline = players.some((player, idx) => {
//   console.log(idx + 1);

//   return player.online;
// });
// console.log("isAnyOnline: ", isAnyOnline);

// const anyHardcorePlayers = players.some((player, idx) => {
//   console.log(idx + 1);

//   return player.timePlayed > 600;
// });
// console.log("anyHardcorePlayers: ", anyHardcorePlayers);
