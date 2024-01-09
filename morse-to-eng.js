import { morseObject } from "./eng-to-morse.js";

export const englishObject = Object.fromEntries(
  Object.entries(morseObject).map((a) => a.reverse())
);

export const splitMorseString = (string) => {
  let charArr = string.split(" ");
  return charArr;
};

export const changeToEnglish = (charArr) => {
  let tmp = charArr.map((char) => {
    return englishObject[char];
  });
  return tmp;
};

export const joinEnglish = (morseArr) => {
  let joinedArr = morseArr.join("");
  return joinedArr;
};
