/*
 * Події миші
 * - mouseenter і mouseleave (це ховер)
 * - mouseover і mouseout
 * - mousemove (chatty event - балакуча подія)
 */

const boxRef = document.querySelector(".js-box");

// boxRef.addEventListener("mouseenter", event => {
//   console.log("🚀 ~ event.target:", event.target);
//   event.target.classList.add("box--active");
// });
// boxRef.addEventListener("mouseleave", event => {
//     console.log("🚀 ~ mouseleave:", event.target);
//     event.target.classList.remove("box--active");
// });

boxRef.addEventListener("mouseover", event => {
  console.log("🚀 ~ mouseover\n");
  //   event.target.classList.add("box--active");
});
// boxRef.addEventListener("mouseout", event => {
//   console.log("🚀 ~ mouseout");
//   //   event.target.classList.add("box--active");
// });

boxRef.addEventListener(
  "mousemove",
  throttle(event => {
    console.log("🚀 ~ mousemove");
    //   console.log("🚀 ~ event.x:", event.x);
    //   console.log("🚀 ~ event.y:", event.y);
  }, 500)
);
