let originalString = "XX";

let newString;

if (originalString.includes("x")) {
  newString = originalString.replaceAll(/[x]/g, "y");
} else if (originalString.includes("X")) {
  newString = originalString.replaceAll(/[X]/g, "Y");
} else {
  newString = originalString;
}

console.log(newString);
