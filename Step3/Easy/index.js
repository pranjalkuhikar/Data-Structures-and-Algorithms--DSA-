// Question 1: Find the maximum element in an array
// Time Complexity: O(n) - single pass through array
// Space Complexity: O(1) - only using one variable
// function findLargest(arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// let arr = [8, 10, 5, 7, 9];
// console.log(findLargest(arr));

// Question 2: Find the second maximum element in an array
// Time Complexity: O(n) - single pass through array
// Space Complexity: O(1) - using two variables
// function findSecondLargest(arr) {
//   let max = arr[0];
//   let sMax = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       sMax = max;
//       max = arr[i];
//     } else if (arr[i] > sMax && arr[i] != max) {
//       sMax = arr[i];
//     }
//   }
//   return sMax;
// }
// let arr = [8, 10, 10, 9, 5, 7, 9];
// console.log(findSecondLargest(arr));

// Question 3: Check if an array is sorted
// Time Complexity: O(n) - single pass through array
// Space Complexity: O(1) - using only boolean variable
// function sortedArray(arr) {
//   let isSorted = true;
//   for (let i = 0; i < arr.length-1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       isSorted = false;
//       break;
//     }
//   }
//   return isSorted;
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(sortedArray(arr));

// Question 4: Remove duplicates from an array
// Method 1: Using Set
// Time Complexity: O(n) - creating Set from array
// Space Complexity: O(n) - storing unique elements in Set
// function removeDuplicateSet(arr) {
//   let set = new Set(arr);
//   return set;
// }
// Method 2: Two Pointer approach (for sorted array)
// Time Complexity: O(n) - single pass through array
// Space Complexity: O(1) - in-place modification
// function removeDuplicate(arr) {
//   let i = 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] != arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }
//   return i + 1;
// }
// let arr = [1, 1, 2, 2, 3, 3, 4, 5, 5];
// console.log([...removeDuplicateSet(arr)]);
// // If when array is sorted
// let n = removeDuplicate(arr);
// for (let i = 0; i < n; i++) {
//   console.log(arr[i]);
// }

// Question 5: Left Rotate the Array by One
// Time Complexity: O(n) - single pass through array
// Space Complexity: O(1) - in-place modification
// let arr = [1, 2, 3, 4, 5];
// let temp = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = temp;
// console.log(arr);
// let arr = [1, 2, 3, 4, 5];
// let temp = arr[arr.length - 1];
// for (let i = arr.length - 1; i > 0; i--) {
//   arr[i] = arr[i - 1];
// }
// arr[0] = temp;
// console.log(arr);

// Question 6: Rotate array by K elements
// Time Complexity: O(n) - single pass through array
// Space Complexity: O(1) - in-place modification
// function reverse(arr, left, right) {
//   while (left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
//   }
// }
// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// function leftRotation(arr, k) {
//   k = k % arr.length;
//   reverse(arr, 0, k - 1);
//   reverse(arr, k, arr.length - 1);
//   reverse(arr, 0, arr.length - 1);
//   return arr;
// }
// function rightRotation(arr, k) {
//   k = k % arr.length;
//   reverse(arr, 0, arr.length - k - 1);
//   reverse(arr, arr.length - k, arr.length - 1);
//   reverse(arr, 0, arr.length - 1);
//   return arr;
// }
// console.log(leftRotation([...arr], k));
// console.log(rightRotation([...arr], k));

// Question 7: Move all zeroes to end of array
// Time Complexity: O(n^2) - single pass through array
// Space Complexity: O(1) - in-place modification
// let arr = [1, 0, 2, 3, 0, 4, 0, 1];
// for (let i = 0; i < arr.length; i++) {
//   let j = i;
//   for (let k = i; k < arr.length; k++) {
//     if (arr[k] !== 0) {
//       [arr[j], arr[k]] = [arr[k], arr[j]];
//       j++;
//     }
//   }
// }
// console.log(arr);

// Time Complexity: O(n) - single pass through array
// Space Complexity: O(1) - in-place modification
// let arr = [1, 0, 2, 3, 0, 4, 0, 1];
// let i = 0;
// let j = 0;
// while (i < arr.length) {
//   if (arr[i] != 0) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     j++;
//   }
//   i++;
// }
// console.log(arr);

// Question 8 : Linear Search
// Time Complexity: O(n) - single pass through array
// Space Complexity: O(1) - in-place modification
// function linearSearch(arr, k) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === k) {
//       return i;
//     }
//   }
//   return -1;
// }
// let arr = [13, 46, 24, 52, 20, 9];
// let k = 52;
// console.log(linearSearch(arr, k));

// Question 9: Union of Two Sorted Arrays
// Time Complexity: O(n+m) - single pass through array
// Space Complexity: O(n+m) - storing unique elements in Set
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [2, 3, 4, 4, 5];
// let temp = [...new Set([...arr1, ...arr2])];
// console.log(temp);

// Question 10 : Find the missing number in an array
// Time Complexity: O(n) - single pass through array
// Space Complexity: O(1) - in-place modification
// let arr = [1, 2, 3, 5];
// let sum = 0;
// let n = arr.length + 1;
// let total = (n * (n + 1)) / 2;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// let missing = total - sum;
// console.log(missing);

// Question 11: Count max Consecutive One's in an array
// Time Complexity: O(n) - single pass through array
// Space Complexity: O(1) - in-place modification
// let arr = [1, 0, 1, 1, 0, 1];
// let count = 0;
// let ans = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 1) {
//     count++;
//     ans = Math.max(count, ans);
//   } else {
//     count = 0;
//   }
// }
// console.log(ans);

// Question 12: Single Number
// Time Complexity: O(n^2) - single pass through array
// Space Complexity: O(1) - in-place modification
// let arr = [2, 2, 1];
// let count = 0;
// let ans = 0;
// for (let i = 0; i < arr.length; i++) {
//   count = 0;
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       count++;
//     }
//   }
//   if (count === 1) {
//     ans = arr[i];
//   }
// }
// console.log(ans);

// Time Complexity: O(n) - single pass through array
// Space Complexity: O(1) - in-place modification
// let arr = [1, 2, 2];
// let ans = 0;
// for (let i = 0; i < arr.length; i++) {
//   ans ^= arr[i];
// }
// console.log(ans);

// Question 13: Longest Subarray with given Sum K
// Time Complexity: O(n^2) - single pass through array
// Space Complexity: O(1) - in-place modification
// let arr = [2, 3, 5, 1, 9];
// let k = 10;
// let count = 0;
// let ans = 0;
// for (let i = 0; i < arr.length; i++) {
//   let sum = 0;
//   for (let j = i; j < arr.length; j++) {
//     sum += arr[j];
//     if (sum === k) {
//       count++;
//       ans = Math.max(ans, j - i + 1);
//     }
//   }
// }
// console.log(
//   "Longest Subarray with given Sum ",
//   k,
//   "is",
//   ans,
//   "and count of subarray is",
//   count
// );

// Question 14: Longest subarray with sum K (Positives + Negatives)
// Time Complexity: O(n) - single pass through array
// Space Complexity: O(n) - storing sum in map
// let arr = [-1, 1, 1];
// let k = 1;
// let map = new Map();
// let sum = 0;
// let maxLen = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
//   if (sum === k) {
//     maxLen = i + 1;
//   }
//   if (map.has(sum - k)) {
//     let prevIndex = map.get(sum - k);
//     maxLen = Math.max(maxLen, i - prevIndex);
//   }
//   if (!map.has(sum)) {
//     map.set(sum, i);
//   }
// }
// console.log("Longest subarray with sum", k, "is", maxLen);
