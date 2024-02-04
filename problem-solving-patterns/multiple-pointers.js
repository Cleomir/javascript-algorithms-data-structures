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
