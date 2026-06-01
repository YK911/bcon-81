/*
 * Об'єкти
 *
 * - Тип даних за посиланням
 * - Масиви і функції - це об'єкти
 */

/**
 * --------------------------
 */

const arr = [111, 222, 333];
// console.log("🚀 ~ arr:", arr);

// arr.x = 123;
// console.log(arr.x);

function foo() {
  console.log("hello");
}
foo.setting = "Some setting value";
// console.log("🚀 ~ foo:", foo.setting);
// console.log("🚀 ~ foo:", foo.name);
// console.dir(foo);

const playlist = {
  name: "My first playlist",
  tracks: ["track-1", "track-2", "track-3"],
};

const tracksList = Array.from(playlist.tracks);
// const tracksList = [...playlist.tracks];

tracksList[0] = "track-999";

// console.log("🚀 ~ tracksList:", tracksList);
// console.log("🚀 ~ playlist:", playlist);
