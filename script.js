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

form.addEventListener("input", (e) => {
  //   e.preventDefault();
  let upperString = stringToUpperCase(textInput.value);
  let charArr = splitEnglishString(upperString);
  let morseArr = changeToMorse(charArr);
  let joinedMorse = joinMorse(morseArr);
  clearNode(resultSection);
  createNode(resultSection, "p", joinedMorse);
});
