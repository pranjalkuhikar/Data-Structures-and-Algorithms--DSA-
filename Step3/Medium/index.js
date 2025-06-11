// Question 1: Two Sum
// Time Complexity: O(n^2) - nested loops
// Space Complexity: O(1) - in-place modification
// let arr = [2, 6, 5, 8, 11];
// let k = 14;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length; j++) {
//     if (arr[i] + arr[j] === k) {
//       console.log(arr[i], arr[j]);
//     }
//   }
// }

// Time Complexity: O(n) - single pass through array
// Space Complexity: O(n) - storing sum in map
// let arr = [2, 6, 5, 8, 11];
// let k = 14;
// let map = new Map();
// for (let i = 0; i < arr.length; i++) {
//   if (map.has(k - arr[i])) {
//     console.log(arr[i], k - arr[i]);
//   }
//   map.set(arr[i], i);
// }

// Question 2: Sort an array of 0s, 1s and 2s
// Time Complexity: O(n^2) - nested loops
// Space Complexity: O(1) - in-place modification
// let arr = [2, 0, 2, 1, 1, 0];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }
// }
// console.log(arr);

// Time Complexity: O(n) - single pass through array
// Space Complexity: O(1) - in-place modification
let arr = [2, 0, 2, 1, 1, 0];
let low = 0;
let mid = 0;
let high = arr.length - 1;
while (mid <= high) {
  if (arr[mid] === 0) {
    [arr[low], arr[mid]] = [arr[mid], arr[low]];
    low++;
    mid++;
  } else if (arr[mid] === 1) {
    mid++;
  } else {
    [arr[mid], arr[high]] = [arr[high], arr[mid]];
    high--;
  }
}
console.log(arr);
