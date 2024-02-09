// This function sorts an array using the selection sort algorithm
function selectionSort(arr) {
  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
    // Assume the first element is the smallest
    let min = i;

    // Loop through the rest of the array
    for (let j = i + 1; j < arr.length; j++) {
      // If a smaller number is found, update min to the new index
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    // If the minimum isn't the initial assumed minimum, swap it with the initial assumed minimum
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  // Return the sorted array
  return arr;
}

console.log(selectionSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
console.log(selectionSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(selectionSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
