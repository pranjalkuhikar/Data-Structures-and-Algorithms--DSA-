# Medium Level DSA Problems 📊

## Table of Contents

- [Overview](#overview)
- [Problems & Solutions](#problems--solutions)
  - [1. Two Sum](#1-two-sum)
  - [2. Sort Array of 0s, 1s, and 2s](#2-sort-array-of-0s-1s-and-2s)
  - [3. Majority Element](#3-majority-element)
  - [4. Maximum Subarray Sum](#4-maximum-subarray-sum)
  - [5. Maximum Subarray Sum with Subarray](#5-maximum-subarray-sum-with-subarray)
  - [6. Stock Buy and Sell](#6-stock-buy-and-sell)
- [Time & Space Complexity](#time--space-complexity)

## Overview

This repository contains solutions to medium-level array problems implemented in JavaScript with detailed explanations and complexity analysis.

## Problems & Solutions

### 1. Two Sum

**Problem:** Find two numbers in an array that add up to a target sum.

#### Solution 1: Brute Force Approach

```javascript
let arr = [2, 6, 5, 8, 11];
let k = 14;
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    if (arr[i] + arr[j] === k) {
      console.log(arr[i], arr[j]);
    }
  }
}
```

**Example:**

```javascript
Input: (arr = [2, 6, 5, 8, 11]), (k = 14);
Output: [6, 8];
```

#### Solution 2: Hash Map Approach

```javascript
let arr = [2, 6, 5, 8, 11];
let k = 14;
let map = new Map();
for (let i = 0; i < arr.length; i++) {
  if (map.has(k - arr[i])) {
    console.log(arr[i], k - arr[i]);
  }
  map.set(arr[i], i);
}
```

**Explanation:**

- Solution 1: Uses nested loops to check all possible pairs
- Solution 2: Uses a hash map to store previously seen numbers
- Both solutions find pairs that sum to target value

### 2. Sort Array of 0s, 1s, and 2s (Dutch National Flag Problem)

**Problem:** Sort an array containing only 0s, 1s, and 2s in-place.

#### Solution 1: Brute Force Approach

```javascript
let arr = [2, 0, 2, 1, 1, 0];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
}
```

**Example:**

```javascript
Input: [2, 0, 2, 1, 1, 0];
Output: [0, 0, 1, 1, 2, 2];
```

#### Solution 2: Three Pointer Approach

```javascript
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
```

**Explanation:**

- Solution 1: Uses bubble sort approach
- Solution 2: Uses three pointers to partition array
- Both solutions sort array in-place

### 3. Majority Element

**Problem:** Find the element that appears more than n/2 times in an array.

#### Solution: Boyer-Moore Voting Algorithm

```javascript
let arr = [2, 2, 1, 1, 1, 2, 2];
let count = 0;
let candidate = null;

for (let num of arr) {
  if (count === 0) {
    candidate = num;
  }
  count += num === candidate ? 1 : -1;
}
```

**Example:**

```javascript
Input: [2, 2, 1, 1, 1, 2, 2];
Output: 2;
```

**Explanation:**

- Uses Boyer-Moore Voting Algorithm
- Maintains a count and candidate
- If count becomes 0, updates candidate
- Final candidate is the majority element

### 4. Maximum Subarray Sum (Kadane's Algorithm)

**Problem:** Find the contiguous subarray with the largest sum.

#### Solution: Kadane's Algorithm

```javascript
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let maxSoFar = arr[0];
let currentMax = arr[0];

for (let i = 1; i < arr.length; i++) {
  currentMax = Math.max(arr[i], currentMax + arr[i]);
  maxSoFar = Math.max(maxSoFar, currentMax);
}
```

**Example:**

```javascript
Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4];
Output: 6(subarray[(4, -1, 2, 1)]);
```

**Explanation:**

- Uses Kadane's Algorithm
- Maintains two variables: currentMax and maxSoFar
- currentMax tracks maximum sum ending at current position
- maxSoFar tracks overall maximum sum

### 5. Maximum Subarray Sum with Subarray

**Problem:** Given an integer array arr, find the contiguous subarray (containing at least one number) which has the largest sum and returns its sum and prints the subarray.

#### Solution: Modified Kadane's Algorithm

```javascript
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let maxSoFar = arr[0];
let currentMax = arr[0];
let start = 0;
let end = 0;
let tempStart = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > currentMax + arr[i]) {
    currentMax = arr[i];
    tempStart = i;
  } else {
    currentMax = currentMax + arr[i];
  }

  if (currentMax > maxSoFar) {
    maxSoFar = currentMax;
    start = tempStart;
    end = i;
  }
}
```

**Example:**

```javascript
Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output:
Maximum Sum: 6
Subarray: [4, -1, 2, 1]
```

**Explanation:**

- Modified version of Kadane's Algorithm
- Tracks start and end indices of maximum subarray
- Updates indices when new maximum is found
- Returns both sum and subarray

### 6. Stock Buy and Sell

**Problem:** Find the maximum profit that can be achieved by buying and selling stocks on different days.

#### Solution: Single Pass Approach

```javascript
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
```

**Example:**

```javascript
Input: [7, 1, 5, 3, 6, 4]
Output:
Maximum Profit: 5
Buy on day 2 at price 1
Sell on day 5 at price 6
```

**Explanation:**

- Uses a single pass approach
- Keeps track of minimum price and buy day
- Calculates potential profit at each step
- Updates maximum profit and sell day if current profit is higher

## Time & Space Complexity

| Problem                     | Solution           | Time Complexity | Space Complexity | Notes                   |
| --------------------------- | ------------------ | --------------- | ---------------- | ----------------------- |
| Two Sum                     | Brute Force        | O(n²)           | O(1)             | Nested loops            |
| Two Sum                     | Hash Map           | O(n)            | O(n)             | Single pass with map    |
| Sort 0s, 1s, 2s             | Brute Force        | O(n²)           | O(1)             | Bubble sort approach    |
| Sort 0s, 1s, 2s             | Three Pointer      | O(n)            | O(1)             | Dutch National Flag     |
| Majority Element            | Boyer-Moore Voting | O(n)            | O(1)             | Single pass algorithm   |
| Maximum Subarray Sum        | Kadane's Algorithm | O(n)            | O(1)             | Dynamic programming     |
| Maximum Subarray with Array | Modified Kadane's  | O(n)            | O(1)             | Tracks subarray indices |
| Stock Buy and Sell          | Single Pass        | O(n)            | O(1)             | Greedy approach         |

## Usage

```javascript
// Example usage for Two Sum
let arr = [2, 6, 5, 8, 11];
let target = 14;
// Use either solution approach

// Example usage for Sort 0s, 1s, 2s
let arr = [2, 0, 2, 1, 1, 0];
// Use either solution approach
```

---

📝 **Note:** All solutions are optimized for time and space complexity.

🔍 **Key Features:**

- Multiple solution approaches for each problem
- In-place modifications where possible
- Efficient algorithms with detailed complexity analysis
- Clear examples and explanations
- Hash map optimization techniques
- Three-pointer technique for array partitioning

---

_Last Updated: March 2024_
