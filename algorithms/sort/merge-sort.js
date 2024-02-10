// This function merges two sorted arrays into one sorted array
function merge(left, right) {
  // Initialize an empty array to store the result
  const result = [];

  // While there are elements in both arrays
  while (left.length && right.length) {
    // If the first element of the left array is less than or equal to the first element of the right array
    if (left[0] <= right[0]) {
      // Remove the first element from the left array and add it to the result array
      result.push(left.shift());
    } else {
      // Remove the first element from the right array and add it to the result array
      result.push(right.shift());
    }
  }

  // If there are elements left in the left array, remove them and add them to the result array
  while (left.length) {
    result.push(left.shift());
  }

  // If there are elements left in the right array, remove them and add them to the result array
  while (right.length) {
    result.push(right.shift());
  }

  // Return the sorted result array
  return result;
}

// This function sorts an array using the merge sort algorithm
function mergeSort(arr) {
  // If the array has less than two elements, it is already sorted
  if (arr.length < 2) {
    return arr;
  }

  // Calculate the middle index of the array
  const middle = Math.floor(arr.length / 2);

  // Recursively sort the left half of the array
  const left = mergeSort(arr.slice(0, middle));

  // Recursively sort the right half of the array
  const right = mergeSort(arr.slice(middle));

  // Merge the sorted left and right halves
  return merge(left, right);
}

console.log(mergeSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
console.log(mergeSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
console.log(mergeSort([2, 1, 4, 3])); // [1, 2, 3, 4]
