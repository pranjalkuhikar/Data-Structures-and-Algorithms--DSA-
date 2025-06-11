# Array Problems Solutions 📊

## Table of Contents

- [Overview](#overview)
- [Problems & Solutions](#problems--solutions)
  - [1. Find Maximum Element](#1-find-maximum-element)
  - [2. Find Second Maximum](#2-find-second-maximum)
  - [3. Check Sorted Array](#3-check-sorted-array)
  - [4. Remove Duplicates](#4-remove-duplicates)
  - [5. Left Rotate Array by One](#5-left-rotate-array-by-one)
  - [6. Rotate Array by K Elements](#6-rotate-array-by-k-elements)
  - [7. Move Zeroes to End](#7-move-zeroes-to-end)
  - [8. Linear Search](#8-linear-search)
  - [9. Union of Two Sorted Arrays](#9-union-of-two-sorted-arrays)
  - [10. Find Missing Number](#10-find-missing-number)
  - [11. Count Max Consecutive Ones](#11-count-max-consecutive-ones)
  - [12. Single Number](#12-single-number)
  - [13. Longest Subarray with given Sum K (Positive Numbers)](#13-longest-subarray-with-given-sum-k-positive-numbers)
  - [14. Longest Subarray with Sum K (Positive + Negative Numbers)](#14-longest-subarray-with-sum-k-positive--negative-numbers)
- [Time & Space Complexity](#time--space-complexity)

## Overview

This repository contains solutions to common array problems implemented in JavaScript with detailed explanations and complexity analysis.

## Problems & Solutions

### 1. Find Maximum Element

**Problem:** Find the largest element in an array

**Solution:**

```javascript
function findLargest(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
```

**Example:**

```javascript
Input: [8, 10, 5, 7, 9];
Output: 10;
```

**Step-by-Step:**

```
Initial: max = 0
Step 1: max = 8  ← Compare 8 > 0
Step 2: max = 10 ← Compare 10 > 8
Step 3: max = 10 ← Compare 5 > 10
Step 4: max = 10 ← Compare 7 > 10
Final:  max = 10 ← Compare 9 > 10
```

### 2. Find Second Maximum

**Problem:** Find the second largest element in an array

**Solution:**

```javascript
function findSecondLargest(arr) {
  let max = arr[0];
  let sMax = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      sMax = max;
      max = arr[i];
    } else if (arr[i] > sMax && arr[i] != max) {
      sMax = arr[i];
    }
  }
  return sMax;
}
```

**Example:**

```javascript
Input: [8, 10, 10, 9, 5, 7, 9];
Output: 9;
```

**Step-by-Step:**

```
Initial: max = 8, sMax = 8
Step 1: max = 10, sMax = 8   ← 10 > 8
Step 2: max = 10, sMax = 8   ← 10 = max
Step 3: max = 10, sMax = 9   ← 9 > sMax
Step 4: max = 10, sMax = 9   ← 5 < sMax
Final:  max = 10, sMax = 9   ← Second largest found
```

### 3. Check Sorted Array

**Problem:** Determine if an array is sorted in ascending order

**Solution:**

```javascript
function sortedArray(arr) {
  let isSorted = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      isSorted = false;
      break;
    }
  }
  return isSorted;
}
```

**Example:**

```javascript
Input: [1, 2, 3, 4, 5];
Output: true;
```

**Step-by-Step:**

```
Check: 1 < 2 ✅
Check: 2 < 3 ✅
Check: 3 < 4 ✅
Check: 4 < 5 ✅
Result: Array is sorted!
```

### 4. Remove Duplicates

**Problem:** Remove duplicate elements from an array

#### Method 1: Using Set

```javascript
function removeDuplicateSet(arr) {
  let set = new Set(arr);
  return set;
}
```

#### Method 2: Two Pointer (for sorted array)

```javascript
function removeDuplicate(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
```

**Example:**

```javascript
Input: [1, 1, 2, 2, 3, 3, 4, 5, 5];
Output: [1, 2, 3, 4, 5];
```

**Step-by-Step:**

```
Initial: [1, 1, 2, 2, 3, 3, 4, 5, 5]
Step 1: [1│ 1, 2, 2, 3, 3, 4, 5, 5]  ← Start with first 1
Step 2: [1, 2│ 2, 3, 3, 4, 5, 5]     ← Add unique 2
Step 3: [1, 2, 3│ 3, 4, 5, 5]        ← Add unique 3
Final:  [1, 2, 3, 4, 5]              ← Final unique elements
```

### 5. Left Rotate Array by One

**Problem:** Rotate all elements of an array to the left by one position

**Solution:**

```javascript
let arr = [1, 2, 3, 4, 5];
let temp = arr[0];
for (let i = 0; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}
arr[arr.length - 1] = temp;
console.log(arr);
```

**Example:**

```javascript
Input: [1, 2, 3, 4, 5];
Output: [2, 3, 4, 5, 1];
```

### 6. Rotate Array by K Elements

**Problem:** Rotate the elements of an array to the left or right by `k` positions

**Solution:**

```javascript
function reverse(arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

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
```

**Example:**

```javascript
Input: (arr = [1, 2, 3, 4, 5]), (k = 2);
Output: [3, 4, 5, 1, 2]; // Left rotation
Output: [4, 5, 1, 2, 3]; // Right rotation
```

### 7. Move Zeroes to End

**Problem:** Move all zeroes to the end of the array while maintaining relative order

**Solution:**

```javascript
let arr = [1, 0, 2, 3, 0, 4, 0, 1];
let i = 0;
let j = 0;
while (i < arr.length) {
  if (arr[i] != 0) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    j++;
  }
  i++;
}
console.log(arr);
```

**Example:**

```javascript
Input: [1, 0, 2, 3, 0, 4, 0, 1];
Output: [1, 2, 3, 4, 1, 0, 0, 0];
```

### 8. Linear Search

**Problem:** Find the index of a target value in an array

**Solution:**

```javascript
function linearSearch(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      return i;
    }
  }
  return -1;
}
```

**Example:**

```javascript
Input: (arr = [13, 46, 24, 52, 20, 9]), (k = 52);
Output: 3;
```

### 9. Union of Two Sorted Arrays

**Problem:** Find the union of two sorted arrays

**Solution:**

```javascript
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 3, 4, 4, 5];
let temp = [...new Set([...arr1, ...arr2])];
console.log(temp);
```

**Explanation:**

- Combine both arrays using spread operator
- Use Set to remove duplicates
- Convert back to array using spread operator

**Example:**

```javascript
Input: (arr1 = [1, 2, 3, 4, 5]), (arr2 = [2, 3, 4, 4, 5]);
Output: [1, 2, 3, 4, 5];
```

### 10. Find Missing Number

**Problem:** Find the missing number in an array of consecutive numbers

**Solution:**

```javascript
let arr = [1, 2, 3, 5];
let sum = 0;
let n = arr.length + 1;
let total = (n * (n + 1)) / 2;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
let missing = total - sum;
console.log(missing);
```

**Explanation:**

- Calculate expected sum using formula: n\*(n+1)/2
- Calculate actual sum of array elements
- Missing number = expected sum - actual sum

**Example:**

```javascript
Input: [1, 2, 3, 5];
Output: 4;
```

### 11. Count Max Consecutive Ones

**Problem:** Find the maximum number of consecutive 1's in an array

**Solution:**

```javascript
let arr = [1, 0, 1, 1, 0, 1];
let count = 0;
let ans = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 1) {
    count++;
    ans = Math.max(count, ans);
  } else {
    count = 0;
  }
}
console.log(ans);
```

**Explanation:**

- Keep track of current consecutive count
- Update maximum count when 1 is found
- Reset count when 0 is found
- Return maximum count found

**Example:**

```javascript
Input: [1, 0, 1, 1, 0, 1];
Output: 2;
```

### 12. Single Number

**Problem:** Find the number that appears only once in an array

**Solution (Method 1 - Using Count):**

```javascript
let arr = [2, 2, 1];
let count = 0;
let ans = 0;
for (let i = 0; i < arr.length; i++) {
  count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      count++;
    }
  }
  if (count === 1) {
    ans = arr[i];
  }
}
console.log(ans);
```

**Solution (Method 2 - Using XOR):**

```javascript
let arr = [1, 2, 2];
let ans = 0;
for (let i = 0; i < arr.length; i++) {
  ans ^= arr[i];
}
console.log(ans);
```

**Explanation:**

- Method 1: Count occurrences of each number
- Method 2: Use XOR operation (a^a = 0, a^0 = a)
- XOR all numbers to get the single number

**Example:**

```javascript
Input: [1, 2, 2];
Output: 1;
```

### 13. Longest Subarray with given Sum K (Positive Numbers)

**Problem:** Find the length of the longest subarray with sum equal to K (for positive numbers only)

**Solution:**

```javascript
let arr = [2, 3, 5, 1, 9];
let k = 10;
let count = 0;
let ans = 0;
for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = i; j < arr.length; j++) {
    sum += arr[j];
    if (sum === k) {
      count++;
      ans = Math.max(ans, j - i + 1);
    }
  }
}
```

**Example:**

```javascript
Input: arr = [2, 3, 5, 1, 9], k = 10
Output: 3 (Subarray [2, 3, 5] has sum 10)
```

**Time Complexity:** O(n²)

- We use nested loops to check all possible subarrays
- Outer loop runs n times
- Inner loop runs n times in worst case
- Total: O(n²)

**Space Complexity:** O(1)

- We only use a few variables (count, ans, sum)
- No extra space proportional to input size

### 14. Longest Subarray with Sum K (Positive + Negative Numbers)

**Problem:** Find the length of the longest subarray with sum equal to K (handles both positive and negative numbers)

**Solution:**

```javascript
let arr = [-1, 1, 1];
let k = 1;
let map = new Map();
let sum = 0;
let maxLen = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  if (sum === k) {
    maxLen = i + 1;
  }
  if (map.has(sum - k)) {
    let prevIndex = map.get(sum - k);
    maxLen = Math.max(maxLen, i - prevIndex);
  }
  if (!map.has(sum)) {
    map.set(sum, i);
  }
}
```

**Example:**

```javascript
Input: arr = [-1, 1, 1], k = 1
Output: 2 (Subarray [1, 1] has sum 1)
```

**Time Complexity:** O(n)

- Single pass through the array
- Hash map operations (get, set) are O(1) on average
- Total: O(n)

**Space Complexity:** O(n)

- We store prefix sums in a hash map
- In worst case, we might need to store n different prefix sums
- Total: O(n)

## Time & Space Complexity

| Problem                     | Time  | Space     | Notes                         |
| --------------------------- | ----- | --------- | ----------------------------- |
| Find Maximum                | O(n)  | O(1)      | Single pass                   |
| Second Maximum              | O(n)  | O(1)      | Single pass, 2 vars           |
| Check Sorted                | O(n)  | O(1)      | Early break possible          |
| Remove Duplicates           | O(n)  | O(n)/O(1) | Set/Two-pointer method        |
| Left Rotate by One          | O(n)  | O(1)      | Single pass, in-place         |
| Rotate by K                 | O(n)  | O(1)      | Reversal algorithm            |
| Move Zeroes to End          | O(n)  | O(1)      | Two-pointer, in-place         |
| Linear Search               | O(n)  | O(1)      | Single pass                   |
| Union of Arrays             | O(n)  | O(n)      | Set operation                 |
| Find Missing                | O(n)  | O(1)      | Sum formula                   |
| Max Consecutive             | O(n)  | O(1)      | Single pass                   |
| Single Number               | O(n)  | O(1)      | XOR operation                 |
| Longest Subarray (Positive) | O(n²) | O(1)      | Nested loops, all subarrays   |
| Longest Subarray (Pos+Neg)  | O(n)  | O(n)      | Hash map, prefix sum approach |

## Usage

```javascript
// Example usage for any function
let arr = [1, 2, 3, 4, 5];
console.log(functionName(arr));
```

---

📝 **Note:** All solutions are optimized for time and space complexity.

🔍 **Key Features:**

- In-place modifications where possible
- Early termination when applicable
- Multiple approaches for some problems
- Efficient algorithms for each problem
- Clear examples and explanations
- Bit manipulation techniques (XOR)
- Mathematical formulas for optimization

---

_Last Updated: March 2024_
