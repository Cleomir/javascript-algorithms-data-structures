// This function performs a linear search on an array for a specific value
function linearSearch(arr, value) {
  // Loop through the array from start to end
  for (let i = 0; i < arr.length; i++) {
    // If the current array element is equal to the value we're searching for
    if (arr[i] === value)
      // Return the index at which the value was found
      return i;
  }

  // If the loop completes without finding the value, return -1 to indicate the value was not found
  return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)); // -1
