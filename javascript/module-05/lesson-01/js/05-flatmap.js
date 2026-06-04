/*
 * Метод flatMap
 */

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  {
    id: "002",
    likes: 17,
    tags: ["html", "js", "nodejs", ["js", "nodejs"], ["html", "js"]],
  },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const tags = tweets.flatMap(tweet => {
  return tweet.tags;
});
// console.log(tags);

// const arr2 = [0, 1, [2, [3, [4, 5]]]];

// const res = arr2.flat(Infinity);
// console.log("🚀 ~ res:", res);

// console.log(arr2.length === res.length);
