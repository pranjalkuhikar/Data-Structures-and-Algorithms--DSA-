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
// let arr = [2, 0, 2, 1, 1, 0];
// let low = 0;
// let mid = 0;
// let high = arr.length - 1;
// while (mid <= high) {
//   if (arr[mid] === 0) {
//     [arr[low], arr[mid]] = [arr[mid], arr[low]];
//     low++;
//     mid++;
//   } else if (arr[mid] === 1) {
//     mid++;
//   } else {
//     [arr[mid], arr[high]] = [arr[high], arr[mid]];
//     high--;
//   }
// }
// console.log(arr);

// Question 3: Majority Element (>n/2 times)
// Time Complexity: O(n) - single pass through array
// Space Complexity: O(1) - constant space
// Boyer-Moore Voting Algorithm
// let arr = [2, 2, 1, 1, 1, 2, 2];
// let count = 0;
// let candidate = null;
// for (let num of arr) {
//   if (count === 0) {
//     candidate = num;
//   }
//   count += num === candidate ? 1 : -1;
// }
// console.log("Majority Element:", candidate);

// Question 4: Maximum Subarray Sum (Kadane's Algorithm)
// Time Complexity: O(n) - single pass through array
// Space Complexity: O(1) - constant space
// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let maxSoFar = arr[0];
// let currentMax = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   currentMax = Math.max(arr[i], currentMax + arr[i]);
//   maxSoFar = Math.max(maxSoFar, currentMax);
// }
// console.log("Maximum Subarray Sum:", maxSoFar);

// Question 5: Maximum Subarray Sum with Subarray
// Time Complexity: O(n) - single pass through array
// Space Complexity: O(1) - constant space
// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let maxSoFar = arr[0];
// let currentMax = arr[0];
// let start = 0;
// let end = 0;
// let tempStart = 0;
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > currentMax + arr[i]) {
//     currentMax = arr[i];
//     tempStart = i;
//   } else {
//     currentMax = currentMax + arr[i];
//   }
//   if (currentMax > maxSoFar) {
//     maxSoFar = currentMax;
//     start = tempStart;
//     end = i;
//   }
// }
// console.log("Maximum Subarray Sum:", maxSoFar);
// console.log("Subarray:", arr.slice(start, end + 1));

// Question 6: Stock Buy and Sell
// Time Complexity: O(n) - single pass through array
// Space Complexity: O(1) - constant space
let prices = [7, 1, 5, 3, 6, 4];
let minPrice = prices[0];
let maxProfit = 0;
let buyDay = 0;
let sellDay = 0;
let tempBuyDay = 0;
for (let i = 1; i < prices.length; i++) {
  if (prices[i] < minPrice) {
    minPrice = prices[i];
    tempBuyDay = i;
  }
  let currentProfit = prices[i] - minPrice;
  if (currentProfit > maxProfit) {
    maxProfit = currentProfit;
    buyDay = tempBuyDay;
    sellDay = i;
  }
}
console.log("Maximum Profit:", maxProfit);
console.log("Buy on day:", buyDay + 1, "at price:", prices[buyDay]);
console.log("Sell on day:", sellDay + 1, "at price:", prices[sellDay]);
