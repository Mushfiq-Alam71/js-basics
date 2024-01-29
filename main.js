// function greet(name, name2) {
//   console.log("hello " + name + " " + name2);
// }

// greet("mushfiq", "alam");

let r = 10 < "5";
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = arr[mid];

    if (guess === target) {
      return mid; // Element found, return its index
    } else if (guess < target) {
      low = mid + 1; // Target is in the right half
    } else {
      high = mid - 1; // Target is in the left half
    }
  }

  return -1; // Element not found
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetElement = 6;
const result = binarySearch(sortedArray, targetElement);

if (result !== -1) {
  console.log(`Element ${targetElement} found at index ${result}.`);
} else {
  console.log(`Element ${targetElement} not found in the array.`);
}
