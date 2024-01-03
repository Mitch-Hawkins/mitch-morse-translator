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

import { createNode, clearNode } from "./dom-functions.js";

export const morseObject = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  " ": "/",
}; //A to Z in Morse Code

export const englishObject = Object.fromEntries(
  Object.entries(morseObject).map((a) => a.reverse())
);

console.log(morseObject);
console.log(englishObject);

// const button = document.querySelector("button");
const textInput = document.querySelector("input");
const resultSection = document.querySelector("section");
const form = document.querySelector("form");

form.addEventListener("input", () => {
  let whichDirection = validateInput(textInput.value);
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
    // console.log(
    //   "You've either written morse code, which hasnt been implemented yet, or you've chucked in a - or a . somewhere"
    // );
    let morseToEnglishString = splitMorseString(textInput.value);
    morseToEnglishString = changeToEnglish(morseToEnglishString);
    morseToEnglishString = joinEnglish(morseToEnglishString);
    clearNode(resultSection);
    createNode(resultSection, "p", morseToEnglishString);
    // console.log(morseToEnglishString);
  }
});

const validateInput = (input) => {
  if (input.match(/-|\./) && input.match(/[^-. ]/)) {
    return "InvalidInput";
  }
  if (input.includes("-") || input.includes(".")) {
    return "MorseToEnglish";
  } else {
    return "EnglishToMorse";
  }
};
