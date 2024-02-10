// This function sorts an array using the insertion sort algorithm
function insertionSort(arr) {
  // Loop through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // Store the current element
    let current = arr[i];
    // Initialize a pointer to the previous element
    let j = i - 1;

    // Move elements of arr[0..i-1] that are greater than current, to one position ahead of their current position
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the current element into its correct position
    arr[j + 1] = current;
  }

  // Return the sorted array
  return arr;
}

console.log(insertionSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
console.log(insertionSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(insertionSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
