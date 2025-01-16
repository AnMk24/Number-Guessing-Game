"use strict";
const randomNunmer = Math.floor(Math.random() * 100 + 1);
let attempts = 0;
const inputElement = document.getElementById("guess");
const buttonElement = document.getElementById("check");
const messageElement = document.getElementById("message");
buttonElement.addEventListener("click", () => {
    const userGuess = parseInt(inputElement.value, 10);
    attempts++;
    if (isNaN(userGuess)) {
        messageElement.textContent = "խնդրում եմ մուտքագրել թիվ";
        return;
    }
    if (userGuess === randomNunmer) {
        messageElement.textContent = "դու հաղթեցիր,այդ թիվն էր";
        buttonElement.disabled = true;
    }
    else if (userGuess < randomNunmer) {
        messageElement.textContent = "մտածիր ավելի մեծ թիվ ";
    }
    else {
        messageElement.textContent = "մտածիր ավելի փոքր թիվ ";
    }
    inputElement.value = "";
});
