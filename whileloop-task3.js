let num1 = 81;
let sum1 = 0;

while (num1 <= 131) {
  if (num1 % 2 !== 0) {
    console.log(num1);
  }
  num1++;
  sum1 += num1;
}
console.log("Summation of all Odd number is: " + sum1);

console.log("");
console.log("");
console.log("");

let num2 = 206;
let sum2 = 0;

while (num2 <= 311) {
  if (num2 % 2 == 0) {
    console.log(num2);
  }
  num2++;
  sum2 += num2;
}
console.log("Summation of all Even number is: " + sum2);
