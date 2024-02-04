// This function finds the first pair of numbers in a sorted array that sum to zero
function sumZero(arr) {
  // Initialize two pointers at the start (left) and end (right) of the array
  let left = 0;
  let right = arr.length - 1;

  // While the left pointer is less than the right pointer
  while (left < right) {
    // Calculate the sum of the values at the left and right pointers
    let sum = arr[left] + arr[right];

    // If the sum is zero, return the pair of numbers
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    // If the sum is greater than zero, move the right pointer down
    else if (sum > 0) {
      right--;
    }
    // If the sum is less than zero, move the left pointer up
    else {
      left++;
    }
  }
  // If no pair is found that sums to zero, the function will end without returning anything
}

const sumZero1 = sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]
const sumZero2 = sumZero([-2, 0, 1, 3]); // undefined
const sumZero3 = sumZero([1, 2, 3]); // undefined

// This function counts the number of unique values in a sorted array
function countUniqueValues(arr) {
  // If the array is empty, return 0
  if (arr.length === 0) return 0;

  // Initialize a pointer at the start of the array
  let i = 0;

  // Loop through the array
  for (let j = 1; j < arr.length; j++) {
    // If the value at the pointer is not equal to the value at the current index
    if (arr[i] !== arr[j]) {
      // Move the pointer up
      i++;
      // Set the value at the pointer to the value at the current index
      arr[i] = arr[j];
    }
  }

  // Return the number of unique values
  return i + 1;
}

const countUniqueValues1 = countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
const countUniqueValues2 = countUniqueValues([
  1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13,
]); // 7
const countUniqueValues3 = countUniqueValues([]); // 0
