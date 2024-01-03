import { morseObject } from "./script.js";

export const stringToUpperCase = (string) => {
  let newString = string.toUpperCase();
  return newString;
};

export const splitEnglishString = (string) => {
  let charArr = string.split("");
  return charArr;
};

export const changeToMorse = (charArr) => {
  let tmp = charArr.map((char) => {
    return morseObject[char];
  });
  return tmp;
};

export const joinMorse = (morseArr) => {
  let joinedArr = morseArr.join(" ");
  return joinedArr;
};
