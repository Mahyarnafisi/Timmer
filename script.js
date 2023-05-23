"use strict";
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".time");
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
  if (int !== null) {
    int = clearInterval(int);
  } else {
    int = setInterval(displayTimer, 10);
  }
});

document.getElementById("pause-timer").addEventListener("click", () => {
  clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
  console.log("reset");
  clearInterval(int);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timeRef.innerHTML = "00 : 00 : 00 : 000";
});

function displayTimer() {
  milliseconds = milliseconds + 10;
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 100 ? "00" + milliseconds : milliseconds;
  timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
