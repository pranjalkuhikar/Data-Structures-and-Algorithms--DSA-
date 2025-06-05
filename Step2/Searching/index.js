// Question 1: Linear Search
// Description: Search for an element by checking each element sequentially
// Time Complexity: O(n)
// Space Complexity: O(1)
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

// Question 2: Binary Search (Requires sorted array)
// Description: Search by repeatedly dividing array in half
// Time Complexity: O(log n)
// Space Complexity: O(1)
// function binarySearch(arr, k) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === k) {
//       return mid;
//     } else if (arr[mid] < k) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// }
// let arr = [1, 2, 3, 4, 5, 6];
// let k = 2;
// console.log(binarySearch(arr, k));
