// is squared same frequency
// This function checks if the frequency of squares of numbers in arr1 is the same as the frequency of numbers in arr2
function isSquaredSameFrequency(arr1, arr2) {
  // If the lengths of the arrays are not equal, return false
  if (arr1.length !== arr2.length) return false;

  // Initialize two objects to store the frequency of numbers
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // Loop through arr1 and count the frequency of each number
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  // Loop through arr2 and count the frequency of each number
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // Loop through the keys in frequencyCounter1
  for (let key in frequencyCounter1) {
    // If the square of the key is not in frequencyCounter2, return false
    if (!(key ** 2 in frequencyCounter2)) return false;
    // If the frequency of the square of the key in frequencyCounter2 is not equal to the frequency of the key in frequencyCounter1, return false
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }

  // If all checks pass, return true
  return true;
}

const isSame1 = isSquaredSameFrequency([1, 2, 3], [4, 1, 9]); // true
const isSame2 = isSquaredSameFrequency([1, 2, 3], [1, 9]); // false
const isSame3 = isSquaredSameFrequency([1, 2, 1], [4, 4, 1]); // false

// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
function isValidAnagram(str1, str2) {
  // If the lengths of the strings are not equal, return false
  if (str1.length !== str2.length) return false;

  // Initialize an object to store the frequency of characters in str1
  let frequencyCounter = {};

  // Loop through str1 and count the frequency of each character
  for (let char of str1) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
  }

  // Loop through str2 and check if the frequency of each character is the same as the frequency of characters in str1
  for (let char of str2) {
    // If the character is not in frequencyCounter or the frequency of the character is 0, return false
    if (!frequencyCounter[char]) return false;
    // If the character is in frequencyCounter, decrement the frequency of the character
    frequencyCounter[char] -= 1;
  }

  // If all checks pass, return true
  return true;
}

const isValidAnagram1 = isValidAnagram("", ""); // true
const isValidAnagram2 = isValidAnagram("aaz", "zza"); // false
const isValidAnagram3 = isValidAnagram("anagram", "nagaram"); // true
