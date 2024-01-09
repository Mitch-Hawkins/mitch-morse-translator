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

const textInput = document.querySelector("input");
const resultSection = document.querySelector("section");
const form = document.querySelector("form");

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
