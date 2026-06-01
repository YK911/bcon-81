/*
 * Об'єкти
 *
 * - Створення об'єкта
 * - Вкладені властивості
 * - Доступ до властивостей через крапку
 * - Доступ до вкладених властивостей
 * - Доступ до властивостей через квадратні дужки
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

const playlist = {
  name: "My amazing playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  isFavourite: true,
  name: "My first playlist",
  userInfo: {
    username: "Mango",
    usernickname: "Mango-123",
    isOnline: false,
    gender: "male",
    age: 21,
    location: {
      country: "Ukraine",
      city: "Kyiv",
      coords: {
        lat: 123456,
        lon: 654321,
      },
    },
  },
};

const userLat = playlist.userInfo.location.coords.lat; // {...}
// console.log("🚀 ~ userLat:", userLat);
const userLon = playlist.userInfo.location.coords.lon; // {...}
// console.log("🚀 ~ userLon:", userLon);
// console.log(playlist.name);
// console.log(playlist.rating);

// console.log(playlist["name"]);

// console.log(favouritePlaylist);

const playlistPropertie = favouritePlaylist.name;
const value = playlist[playlistPropertie];
// console.log("🚀 ~ value:", value);

const playlistRatingName = playlistRating.name;
// console.log("🚀 ~ ", playlistRatingName);

const playlistRatingValue = playlist[playlistRatingName];
// console.log("🚀 ~ playlistRatingValue:", playlistRatingValue);

playlist.rating = 4;
// console.log("🚀 ~ playlist:", playlist);

playlist[playlistRatingName] = 111;

// console.log("🚀 ~ playlist:", playlist);
playlist.duration = 100;
// delete playlist.tracks; // Видалення властивості

playlist.tracks.push("track-4"); // [...]
const playlistLen = playlist.tracks.length;
// console.log("🚀 ~ playlist:", playlist);
// console.log("🚀 ~ playlistLen:", playlistLen);

// const notebook = {
//   name: "MacBook",
//   model: " Pro 14' ",
//   price: null,
// };

/**
 * -----------------------------------
 */
// const propertyName = "tracks";

/**
 * -----------------------------------
 */
function foo(values) {
  // console.log("🚀 ~ foo ~ values:", values);

  console.log(values.x);
  console.log(values.y);

  console.log("params.x", (params.x = 111));
}

// foo({ a: 111, b: 222 });

const params = {
  x: 555,
  y: 777,
};

foo(params);

const plugins = ["Charts", "Tables"];

const userSettings = {
  isMessagesOpen: false,
  themeColor: "default",
  plugins,
  // plugins: ["Charts", "Tables"]
};
console.log("🚀 ~ userSettings:", userSettings);

const propertyName = "isMessagesOpen";

userSettings[propertyName];
// userSettings["themeColor"]
console.log("🚀 ~ userSettings:", userSettings[propertyName]);
