import { englishObject } from "./script.js";

// export const stringToUpperCase = (string) => {
//   let newString = string.toUpperCase();
//   return newString;
// };

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
