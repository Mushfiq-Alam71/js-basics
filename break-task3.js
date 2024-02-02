for (let i = 1; i <= 100; i++) {
  console.log(i);

  // Check if the current number is a square number
  if (Math.sqrt(i) % 1 === 0) {
    console.log("Found the first square number (${i})! Exiting the loop.");
    break;
  }
}
