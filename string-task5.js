function capitalizeLetter(str) {
  return str.replace(/\b\w/g, function (match) {
    return match.toUpperCase();
  });
}

let originalString = "capitalize every first letter of this sentence";
let capitalizedString = capitalizeLetter(originalString);
console.log(capitalizedString);
