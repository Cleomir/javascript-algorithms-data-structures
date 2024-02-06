// This function performs a countdown from the input number to 0 using recursion
function countdown(num) {
  // Base case: if num is less than or equal to 0, end the recursion
  if (num <= 0) {
    return;
  }
  // Print the current number
  console.log(num);
  // Recursive case: call the countdown function with num - 1
  countdown(num - 1);
}

countdown(5); //5 4 3 2 1

// This function returns the sum of all numbers from 1 to the input number using recursion
function sumRange(num) {
  // Base case: if num is 1, return 1
  if (num === 1) {
    return 1;
  }
  // Recursive case: return num plus the result of calling sumRange with num - 1
  return num + sumRange(num - 1);
}

console.log(sumRange(3)); // 6

// This function returns the factorial of the input number using recursion
function factorial(num) {
  // Base case: if num is 0, return 1
  if (num === 0) {
    return 1;
  }
  // Recursive case: return num times the result of calling factorial with num - 1
  return num * factorial(num - 1);
}

console.log(factorial(5)); // 120

// This function collects all odd values from an array using a helper method recursion pattern
function collectOddValues(arr) {
  // Initialize an empty array to store the odd values
  let result = [];

  // Define a helper function to perform the recursion
  function helper(helperInput) {
    // Base case: if the helperInput array is empty, end the recursion
    if (helperInput.length === 0) {
      return;
    }

    // If the first element of helperInput is odd, push it to the result array
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    // Recursive case: call the helper function with the rest of helperInput
    helper(helperInput.slice(1));
  }

  // Call the helper function with the initial array
  helper(arr);

  // Return the result array containing all odd values
  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [1, 3, 5, 7, 9]

// This function collects all odd values from an array using a pure recursion pattern
function collectOddValuesPureRecursion(arr) {
  // Initialize an empty array to store the odd values
  let newArr = [];

  // Base case: if the arr array is empty, return the new array
  if (arr.length === 0) {
    return newArr;
  }

  // If the first element of arr is odd, push it to the new array
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  // Recursive case: concatenate the new array with the result of calling the function on the rest of arr
  newArr = newArr.concat(collectOddValuesPureRecursion(arr.slice(1)));

  // Return the new array containing all odd values
  return newArr;
}

console.log(collectOddValuesPureRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [1, 3, 5, 7, 9]
