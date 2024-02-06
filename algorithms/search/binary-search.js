// This function performs a binary search on a sorted array for a specific target value
function binarySearch(arr, target) {
  // Initialize two pointers at the start (left) and end (right) of the array
  let left = 0;
  let right = arr.length - 1;

  // While the left pointer is less than or equal to the right pointer
  while (left <= right) {
    // Calculate the middle index of the current range
    let mid = Math.floor((left + right) / 2);

    // If the value at the middle index is equal to the target, return the middle index
    if (arr[mid] === target) {
      return mid;
    }
    // If the value at the middle index is less than the target, move the left pointer to the right of the middle index
    else if (arr[mid] < target) {
      left = mid + 1;
    }
    // If the value at the middle index is greater than the target, move the right pointer to the left of the middle index
    else {
      right = mid - 1;
    }
  }

  // If the loop completes without finding the target, return -1 to indicate the target was not found
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
