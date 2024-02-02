// Sum of Odd Numbers
let sum1 = 0;
for (let x = 91; x <= 129; x++) {
  if (x % 2 !== 0) {
    console.log(x);
  }
  sum1 = sum1 + x;
}
console.log(sum1);

console.log("");
console.log("");
console.log("");

// Sum of Even Numbers
let sum2 = 0;
for (let y = 51; y <= 85; y++) {
  if (y % 2 == 0) {
    console.log(y);
  }
  sum2 = sum2 + y;
}
console.log(sum2);
