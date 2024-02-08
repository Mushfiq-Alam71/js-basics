// function deleteInvalids(array) {
//   if (!Array.isArray(array)) {
//     return "Invalid Array";
//   }

//   let onlyNumbers = [];
//   for (const number of array) {
//     if (typeof number === "number" && Number.isFinite(number)) {
//       onlyNumbers.push(number);
//     }
//   }

//   return onlyNumbers;
// }

// let numbers = [1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
// let validNumbers = deleteInvalids(numbers);

// console.log(validNumbers);

const siteName = "google";

const formattedSiteName =
  siteName.charAt(0).toUpperCase() + siteName.slice(1).toLowerCase();

console.log(formattedSiteName);
