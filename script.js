import {
  stringToUpperCase,
  splitEnglishString,
  changeToMorse,
  joinMorse,
} from "./eng-to-morse.js";

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

console.log(morseObject);

const button = document.querySelector("button");
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
    let charArr = splitEnglishString(upperString);
    let morseArr = changeToMorse(charArr);
    let joinedMorse = joinMorse(morseArr);
    clearNode(resultSection);
    createNode(resultSection, "p", joinedMorse);
  }
  if (whichDirection == "MorseToEnglish") {
    console.log(
      "You've either written morse code, which hasnt been implemented yet, or you've chucked in a - or a . somewhere"
    );
  }
});

const validateInput = (input) => {
  if (input.includes("/-./") && input.includes("/(?!-|.| )/")) {
    return "InvalidInput";
  }
  if (input.includes("-") || input.includes(".")) {
    return "MorseToEnglish";
  } else {
    return "EnglishToMorse";
  }
};
