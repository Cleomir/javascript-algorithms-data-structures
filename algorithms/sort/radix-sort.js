// This function sorts an array using the radix sort algorithm
function radixSort(arr) {
  // Find the maximum number in the array to determine the number of digits
  const max = Math.max(...arr);
  // Calculate the number of digits of the maximum number
  const maxDigits = max.toString().length;

  // Initialize buckets for each digit from 0 to 9
  let buckets = Array.from({ length: 10 }, () => []);

  // Loop for the number of digits in the maximum number
  for (let i = 0; i < maxDigits; i++) {
    // For each element in the array
    for (const element of arr) {
      // Get the current number
      const num = element;
      // Calculate the digit at the current place value
      const digit = Math.floor(num / Math.pow(10, i)) % 10;
      // Add the number to the corresponding bucket
      buckets[digit].push(num);
    }

    // Flatten the buckets into a single array
    arr = [].concat(...buckets);
    // Reset the buckets for the next iteration
    buckets = Array.from({ length: 10 }, () => []);
  }

  // Return the sorted array
  return arr;
}

console.log(radixSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
console.log(radixSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
console.log(radixSort([500, 1000, 1, 20, 99, 55])); // [1, 20, 55, 99, 500, 1000]
