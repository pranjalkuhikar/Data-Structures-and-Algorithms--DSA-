// Question 1: Find the maximum element in an array
// Time Complexity: O(n) - single pass through array
// Space Complexity: O(1) - only using one variable
// function findLargest(arr) {
//   let max = 0;
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
//   for (let i = 0; i < arr.length; i++) {
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

// Question 6: Rotate array by K elements
// Time Complexity: O(n) - single pass through array
// Space Complexity: O(1) - in-place modification
function reverse(arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}
let arr = [1, 2, 3, 4, 5];
let k = 2;

function leftRotation(arr, k) {
  k = k % arr.length;
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  reverse(arr, 0, arr.length - 1);
  return arr;
}
function rightRotation(arr, k) {
  k = k % arr.length;
  reverse(arr, 0, arr.length - k - 1);
  reverse(arr, arr.length - k, arr.length - 1);
  reverse(arr, 0, arr.length - 1);
  return arr;
}

console.log(leftRotation([...arr], k));
console.log(rightRotation([...arr], k));
