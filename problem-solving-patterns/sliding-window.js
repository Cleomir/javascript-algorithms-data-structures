// This function calculates the maximum sum of a subarray with length num in the array arr
function maxSubArraySum(arr, num) {
  // If the length of the array is less than num, return null
  if (arr.length < num) return null;

  // Initialize maxSum and tempSum
  let maxSum = 0;
  let tempSum = 0;

  // Calculate the sum of the first num numbers in the array
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  // Set tempSum equal to maxSum
  tempSum = maxSum;

  // Loop through the rest of the array
  for (let i = num; i < arr.length; i++) {
    // Subtract the first number of the previous subarray and add the next number in the array to tempSum
    tempSum = tempSum - arr[i - num] + arr[i];
    // Update maxSum to be the maximum of maxSum and tempSum
    maxSum = Math.max(maxSum, tempSum);
  }

  // Return the maximum sum of a subarray with length num
  return maxSum;
}

const maxSum1 = maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
const maxSum2 = maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
const maxSum3 = maxSubArraySum([4, 2, 1, 6], 1); // 6
