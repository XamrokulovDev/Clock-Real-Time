"use strict";

const htmlHours = document.querySelector("#hours");
const htmlMinutes = document.querySelector("#minutes");
const htmlSeconds = document.querySelector("#seconds");

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    htmlHours.textContent = hours < 10 ? "0" + hours : hours;
    htmlMinutes.textContent = minutes < 10 ? "0" + minutes : minutes;
    htmlSeconds.textContent = seconds < 10 ? "0" + seconds : seconds;
}

setInterval(updateClock, 1000);

updateClock();
