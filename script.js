"use strict";
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".time");
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
  console.log("start");
});

document.getElementById("pause-timer").addEventListener("click", () => {
  console.log("pause");
});

document.getElementById("reset-timer").addEventListener("click", () => {
  console.log("reset");
});
