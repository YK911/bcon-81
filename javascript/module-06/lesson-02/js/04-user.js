/*
 * Напиши клас User який створює об'єкт із властивостями login та email.
 * Оголоси приватні властивості #login та #email, доступ до яких зроби через
 * гетер та сетер login та email.
 */
class User {
  #login;
  #email;

  constructor(params = {}) {
    this.email = params.email;
    this.#login = params.login;
  }

  get email() {
    return this.#email;
  }
  set email(newEmail) {
    const isValid = new RegExp("^[a-z]+@[a-z]+\.[a-z]{2,}$").test(newEmail);

    if (isValid) {
      this.#email = newEmail;
    } else {
      this.#email = "";
    }
  }

  get login() {
    return this.#login;
  }
  set login(newLogin) {
    this.#login = newLogin;
  }
}

const mango = new User({
  login: "Mango",
  email: "mangodog.woof",
});
console.log("🚀 ~ mango:", mango);

console.log(mango.login); // Mango
mango.login = "Mangodoge";
console.log(mango.login); // Mangodoge

const poly = new User({
  login: "Poly",
  email: "poly@mail.com",
});
console.log("🚀 ~ poly:", poly);

console.log(poly.login); // Poly
poly.login = "Polycutie";
console.log(poly.login); // Polycutie
