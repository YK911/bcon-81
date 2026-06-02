/*
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */

const playlist = {
  name: "My amazing playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],

  changeName(newName) {
    // this
    // console.log(this); // undefined

    this.name = newName;
  },

  addTrack(track) {
    this.tracks.push(track);
  },

  updateRating(newRating) {
    const rating = Number.parseInt(newRating);
    const isNan = Number.isNaN(rating);
    if (isNan) {
      console.warn("Please, use number!");
      return;
    }

    if (rating < 0 || rating > 5) {
      console.warn(`${rating} out of range 0 - 5`);
      return;
    }

    this.rating = rating;
  },

  getTrackCount() {
    return this.tracks.length;
  },
};
// console.log("🚀 ~ playlist:", playlist);

// console.log(playlist.getTrackCount());

playlist.changeName("My favourite music");

// playlist.addTrack("track-4");
// playlist.addTrack("track-5");
// playlist.addTrack("track-6");
// playlist.addTrack("track-7");

// console.log(playlist.getTrackCount());

// playlist.addTrack("new track 2");
// console.log(playlist.getTrackCount());

// playlist.updateRating(4);
// playlist.updateRating("qwe");
// playlist.updateRating(-1);
// console.log(playlist);

// console.log(playlist.tracks);

const car = {
  name: "Toyota",
  model: "RAV-4",
  year: 2019,
  price: 10_000,
  options: {
    audio: "Bang&Olufsen",
    gearBox: "automatic",
    fuelType: "gasoline",
  },
};

car.changeName = playlist.changeName;
car.changeName("Renault");
// console.log(car);
