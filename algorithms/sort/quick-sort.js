// This function sorts an array using the quick sort algorithm
function quickSort(arr) {
  // If the array has one or zero elements, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Choose the first element as the pivot
  const pivot = arr[0];

  // Initialize two arrays to hold elements less than (left) and greater than (right) the pivot
  const left = [];
  const right = [];

  // Loop through the rest of the array
  for (let i = 1; i < arr.length; i++) {
    // If the current element is less than the pivot, add it to the left array
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      // If the current element is greater than or equal to the pivot, add it to the right array
      right.push(arr[i]);
    }
  }

  // Recursively sort the left array and the right array, and concatenate them with the pivot in between
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
console.log(quickSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
console.log(quickSort([2, 1, 4, 3])); // [1, 2, 3, 4]
