// This function sorts an array using the bubble sort algorithm
function bubbleSort(arr) {
  // Initialize a variable to track if a swap occurred in the last pass
  let swapped;

  // Continue looping as long as swaps are occurring
  do {
    // Assume no swaps will occur in this pass
    swapped = false;

    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
      // If the current element is greater than the next element
      if (arr[i] > arr[i + 1]) {
        // Swap the current element and the next element
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        // Mark that a swap occurred in this pass
        swapped = true;
      }
    }
    // Continue looping as long as a swap occurred in the last pass
  } while (swapped);

  // Return the sorted array
  return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
console.log(bubbleSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(bubbleSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
