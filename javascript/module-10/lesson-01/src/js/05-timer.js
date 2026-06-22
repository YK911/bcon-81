import "../common.css";

/*
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 */

class Timer {
  constructor({ onTick, clockface }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
    this.clockface = clockface;

    this.init();
  }

  init() {
    const time = this.getTimeComponents(0);
    this.onTick(time, this.clockface);
  }

  start() {
    if (this.isActive) return;

    const startTime = Date.now();
    this.isActive = !this.isActive;
    startBtn.disabled = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = this.getTimeComponents(deltaTime);
      this.onTick(time, this.clockface);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    const time = this.getTimeComponents(0);
    this.onTick(time, this.clockface);
    startBtn.disabled = false;
  }

  /*
   * - Приймає час в мілісекундах
   * - Вираховує скільки в них вміщається годин/хвилин/секунд
   * - Повертає об'єкт з властивостями hours, mins, secs
   * - Адська копіпаста з stackoverflow 💩
   */
  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }

  /*
   * Приймає число, перетворює його в рядок і додає в початок 0, якщо число менше 2-х знаків
   */
  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const startBtn = document.querySelector("button[data-action-start]");
const stopBtn = document.querySelector("button[data-action-stop]");
const clockface = document.querySelector(".js-clockface");

// const startBtn1 = document.querySelector(".timer-1 button[data-action-start]");
// const stopBtn1 = document.querySelector(".timer-1 button[data-action-stop]");
// const clockface1 = document.querySelector(".timer-1 .js-clockface");

const timer = new Timer({
  onTick: updateClockface,
  clockface: clockface,
});

startBtn.addEventListener("click", timer.start.bind(timer));
stopBtn.addEventListener("click", timer.stop.bind(timer));

// const timer1 = new Timer({
//   onTick: updateClockface,
//   clockface: clockface1,
// });

// startBtn1.addEventListener("click", timer1.start.bind(timer1));
// stopBtn1.addEventListener("click", timer1.stop.bind(timer1));

/*
 * - Приймає час в мілісекундах
 * - Вираховує скільки в них вміщається годин/хвилин/секунд
 * - Рендерить інтерфейс
 */
function updateClockface({ hours, mins, secs }, clockInteface) {
  clockInteface.textContent = `${hours}:${mins}:${secs}`;
}
