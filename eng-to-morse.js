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
