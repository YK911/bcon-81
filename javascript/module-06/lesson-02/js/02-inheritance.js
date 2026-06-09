/*
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

// class Parent {
//   color = "red";
//   size = "S";
// }
// class Child extends Parent {
//   color = "blue";
// }

// const childExp = new Child();
// console.log("🚀 ~ childExp:", childExp);

class User {
  #email;

  constructor(email) {
    this.#email = email;

    // this.validateEmail();
  }

  validateEmail() {
    alert("Validation working");
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    if (newEmail.includes("@")) {
      this.#email = newEmail;
    }
  }
}

class ContentEditor extends User {
  constructor(email, posts) {
    super(email);
    this.posts = posts;
  }

  addPost(newPost) {
    this.posts.push(newPost);
  }

  showPosts() {
    console.table(this.posts);
  }

  findPost() {}
}

const user = new User("poly@mail.com");
// console.log("🚀 ~ user:", user);

// user.findPost = function () {
//   console.log(this);
// };

// user.findPost();

const editor = new ContentEditor("mango@mail.com", []);
// console.log("🚀 ~ editor:", editor);

editor.email = "Mango@mail.com";

// console.log("🚀 ~ editor:", editor);

editor.addPost("post-1");
editor.addPost("post-2");
editor.addPost("post-3");

// editor.showPosts();

const writer = new ContentEditor("ajax@mail.com", []);
// console.log("🚀 ~ writer:", writer);

const aboutSliderOptions = { spaceBetween: 12, delay: 500 };
const aboutSlider = new Swiper(".about-slider", aboutSliderOptions);
console.log("🚀 ~ aboutSlider:", aboutSlider);

aboutBtnStart.onclick = () => {
  aboutSlider.autoplay.start();
};
aboutBtnStop.onclick = () => {
  aboutSlider.autoplay.stop();
};

const productsSliderOptions = {
  initialSlide: 3,
  spaceBetween: 12,
  effect: "flip",
  flipEffect: {
    slideShadows: false,
  },
};
const productsSlider = new Swiper(".products-slider", productsSliderOptions);
