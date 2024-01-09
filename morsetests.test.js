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

describe("validateInput() tests", () => {
  it("Should return a defined value", () => {
    expect(validateInput("aaa")).toBeDefined();
    expect(validateInput("")).toBeDefined();
  });
  it("Shoud return 'MorseToEnglish' if there is only Morse in the input field", () => {
    expect(validateInput("--- ... --- / ... --- ...")).toBe("MorseToEnglish");
  });
  it("Should return 'EnglishToMorse' if there is only English in the input field", () => {
    expect(validateInput("Morse")).toBe("EnglishToMorse");
    expect(validateInput("SOS")).toBe("EnglishToMorse");
    expect(validateInput("Welcome to my Morse Translator Website")).toBe(
      "EnglishToMorse"
    );
  });
  it("Should return 'InvalidInput' if there is both Morse and English characters in the input field", () => {
    expect(validateInput("Morse---")).toBe("InvalidInput");
    expect(validateInput("S.-oin-.d")).toBe("InvalidInput");
  });
});

describe("stringToUpperCase() tests", () => {
  it("Should return a defined value", () => {
    expect(stringToUpperCase("aaa")).toBeDefined();
  });
  it("Should return a fully uppercase string", () => {
    expect(stringToUpperCase("Banana")).toBe("BANANA");
  });
});

describe("splitEnglishString() tests", () => {
  it("Should return a defined value", () => {
    expect(splitEnglishString("BANANA")).toBeDefined;
  });
  it("Should return a string split into individual characters", () => {
    expect(splitEnglishString("BANANA")).toEqual([
      "B",
      "A",
      "N",
      "A",
      "N",
      "A",
    ]);
  });
});

describe("changeToMorse() tests", () => {
  it("Should return a defined value", () => {
    expect(changeToMorse(["M", "I", "T", "C", "H"])).toBeDefined;
  });
  it("Should return the input string translated into an array of morse characters", () => {
    expect(changeToMorse(["M", "I", "T", "C", "H"])).toEqual([
      "--",
      "..",
      "-",
      "-.-.",
      "....",
    ]);
  });
});

describe("joinMorse() tests", () => {
  it("Should return a defined value", () => {
    expect(joinMorse(["--", "..", "-", "-.-.", "...."])).toBeDefined;
  });
  it("Should return the morse characters from the array joined together correctly in one string", () => {
    expect(joinMorse(["--", "..", "-", "-.-.", "...."])).toBe(
      "-- .. - -.-. ...."
    );
  });
});

describe("splitMorseString() tests", () => {
  it("Should return a defined value", () => {
    expect(splitMorseString("... --- ...")).toBeDefined;
  });
  it("Should return a string split into individual morse characters", () => {
    expect(splitMorseString("... --- ...")).toEqual(["...", "---", "..."]);
  });
});

describe("changeToEnglish() tests", () => {
  it("Should return a defined value", () => {
    expect(changeToEnglish(["--", "..", "-", "-.-.", "...."])).toBeDefined;
  });
  it("Should return the input string translated into an array of English characters", () => {
    expect(changeToEnglish(["--", "..", "-", "-.-.", "...."])).toEqual([
      "M",
      "I",
      "T",
      "C",
      "H",
    ]);
  });
});

describe("joinEnglish() tests", () => {
  it("Should return a defined value", () => {
    expect(joinEnglish(["M", "I", "T", "C", "H"])).toBeDefined;
  });
  it("Should return the English characters from the array joined together correctly in one string", () => {
    expect(joinEnglish(["M", "I", "T", "C", "H"])).toBe("MITCH");
  });
});
