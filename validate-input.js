export const validateInput = (input) => {
  if (input.match(/-|\./) && input.match(/[^-.\/ ]/)) {
    return "InvalidInput";
  }
  if (input.includes("-") || input.includes(".")) {
    return "MorseToEnglish";
  } else {
    return "EnglishToMorse";
  }
};
