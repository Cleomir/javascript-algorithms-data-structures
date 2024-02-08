// This function performs a string search for a pattern within a larger string using the sliding window pattern
function stringSearch(string, pattern) {
  // Initialize a counter to keep track of the number of occurrences of the pattern
  let count = 0;

  // Loop through the larger string
  for (let i = 0; i < string.length; i++) {
    // If the remaining part of the string is shorter than the pattern, break the loop
    if (i + pattern.length > string.length) {
      break;
    }

    // Slice a part of the string that has the same length as the pattern
    const stringSlice = string.slice(i, i + pattern.length);

    // If the sliced part of the string is equal to the pattern, increment the count
    if (stringSlice === pattern) {
      count++;
    }
  }

  // Return the count of occurrences of the pattern in the larger string
  return count;
}

console.log(stringSearch("hello world", "l")); // 3
console.log(stringSearch("lorie loled", "lol")); // 1
console.log(stringSearch("lorie loled", "pop")); // 0
