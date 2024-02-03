let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let revNumber = [];

for (let num of numbers) {
  revNumber.unshift(num);
}
console.log(revNumber);
