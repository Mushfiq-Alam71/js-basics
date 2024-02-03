function containsAllVowels(str) {
  // Convert the string to lowercase for case-insensitive comparison
  const lowercaseStr = str.toLowerCase();

  // Check if the string contains all vowels
  return lowercaseStr.includes("a" && "e" && "i" && "o" && "u");
}

// Example usage:
const inputString = "Example string with all vowels aeiou ";
const result = containsAllVowels(inputString);
console.log(
  `The string ${result ? "contains" : "does not contain"} all vowels.`
);
