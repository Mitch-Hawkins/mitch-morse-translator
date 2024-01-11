import { validateInput } from "./validate-input.js";

import {
  stringToUpperCase,
  splitEnglishString,
  changeToMorse,
  joinMorse,
} from "./eng-to-morse.js";

import {
  splitMorseString,
  changeToEnglish,
  joinEnglish,
} from "./morse-to-eng.js";

const createNode = (parent, type, content) => {
  const child = document.createElement(type);
  const textNode = document.createTextNode(content);
  child.appendChild(textNode);
  parent.appendChild(child);
};

const clearNode = (node) => {
  node.innerHTML = "";
};

const textInput = document.querySelector(".container__form__input");
const resultSection = document.querySelector(".container__results__output");

const form = document.querySelector(".container__form");

form.addEventListener("input", () => {
  let whichDirection = validateInput(textInput.value);
  console.log(whichDirection);
  if (whichDirection == "InvalidInput") {
    clearNode(resultSection);
    createNode(resultSection, "p", "Invalid Input");
  }
  if (whichDirection == "EnglishToMorse") {
    let upperString = stringToUpperCase(textInput.value);
    upperString = splitEnglishString(upperString);
    upperString = changeToMorse(upperString);
    upperString = joinMorse(upperString);
    clearNode(resultSection);
    createNode(resultSection, "p", upperString);
  }
  if (whichDirection == "MorseToEnglish") {
    let morseToEnglishString = splitMorseString(textInput.value);
    morseToEnglishString = changeToEnglish(morseToEnglishString);
    morseToEnglishString = joinEnglish(morseToEnglishString);
    clearNode(resultSection);
    createNode(resultSection, "p", morseToEnglishString);
  }
});

let arrayOfPings = [];
let currentTime = +new Date();
let previousTime = currentTime;
let deltaTime = currentTime - previousTime;
let hasPingTimedout = true;

button.addEventListener("click", (e) => {
  e.preventDefault();
  let key = ping();
  if (key) {
    arrayOfPings.push(key);
  }
  if (arrayOfPings.length == 4) {
    let joinedArr = arrayOfPings.join("");
    textInput.value += joinedArr;
    arrayOfPings = [];
  }
  console.log(key);
});

function ping() {
  // if (hasPingTimedout) {
  //   deltaTime = currentTime - previousTime
  // }

  currentTime = +new Date();
  deltaTime = currentTime - previousTime;
  if (deltaTime <= 400) {
    previousTime = currentTime;
    return ".";
  } else if (deltaTime >= 401 && deltaTime <= 1500) {
    previousTime = currentTime;
    return "-";
  } else if (deltaTime >= 1501 && deltaTime <= 2000) {
    previousTime = currentTime;
    return "/";
    // let joinedArr = arrayOfPings.join("");
    // textInput.value += joinedArr;
    // arrayOfPings = [];
    // previousTime = currentTime;
    // return " / ";
  } else {
    previousTime = currentTime;
    return;
  }
}
