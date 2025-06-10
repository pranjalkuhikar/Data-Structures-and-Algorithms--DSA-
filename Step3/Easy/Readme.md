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
- [Time & Space Complexity](#time--space-complexity)

## Overview

This repository contains solutions to common array problems implemented in JavaScript with detailed explanations and complexity analysis.

## Problems & Solutions

### 1. Find Maximum Element

**Problem:** Find the largest element in an array

**Solution:**

```javascript
function findLargest(arr) {
  let max = 0;
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
  for (let i = 0; i < arr.length; i++) {
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

**Problem:** Rotate all elements of an array to the left by one position. The first element moves to the last position.

**Solution:**

```javascript
let arr = [1, 2, 3, 4, 5]; // Example Input
let temp = arr[0];
for (let i = 0; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}
arr[arr.length - 1] = temp;
console.log(arr); // Output: [2, 3, 4, 5, 1]
```

**Explanation:**

1. Store first element in temp
2. Shift all elements one position left
3. Place temp at last position

**Example:**

```javascript
Input: arr = [1, 2, 3, 4, 5];
Output: [2, 3, 4, 5, 1];
```

### 6. Rotate Array by K Elements

**Problem:** Rotate the elements of an array to the left or right by `k` positions.

**Solution (Optimal Approach using Reversal Algorithm):**

```javascript
function reverse(arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

function leftRotation(arr, k) {
  const n = arr.length;
  k = k % n;
  if (k === 0) return arr;
  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);
  reverse(arr, 0, n - 1);
  return arr;
}

function rightRotation(arr, k) {
  const n = arr.length;
  k = k % n;
  if (k === 0) return arr;
  reverse(arr, 0, n - k - 1);
  reverse(arr, n - k, n - 1);
  reverse(arr, 0, n - 1);
  return arr;
}
```

**Explanation:**

- Left Rotation: Reverse first k elements, then remaining elements, then entire array
- Right Rotation: Reverse first n-k elements, then last k elements, then entire array

**Example:**

```javascript
Input: (arr = [1, 2, 3, 4, 5]), (k = 2);
Output: [3, 4, 5, 1, 2]; // Left rotation
Output: [4, 5, 1, 2, 3]; // Right rotation
```

### 7. Move Zeroes to End

**Problem:** Given an array of integers, move all the zeroes to the end of the array while maintaining the relative order of the non-zero elements.

**Solution (Optimal Approach - Two Pointers):**

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
console.log(arr); // Output: [1, 2, 3, 4, 1, 0, 0, 0]
```

**Explanation:**

- Use two pointers: i for scanning, j for placing non-zero elements
- When non-zero element found, swap with j position and increment j
- Maintains relative order of non-zero elements

**Example:**

```javascript
Input: arr = [1, 0, 2, 3, 0, 4, 0, 1];
Output: [1, 2, 3, 4, 1, 0, 0, 0];
```

### 8. Linear Search

**Problem:** Given an array of integers and a target value `k`, find the index of `k` in the array. If `k` is not present, return -1.

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

**Explanation:**

- Sequentially check each element
- Return index if found, -1 if not found

**Example:**

```javascript
Input: (arr = [13, 46, 24, 52, 20, 9]), (k = 52);
Output: 3;

Input: (arr = [13, 46, 24, 52, 20, 9]), (k = 100);
Output: -1;
```

## Time & Space Complexity

| Problem            | Time | Space     | Notes                  |
| ------------------ | ---- | --------- | ---------------------- |
| Find Maximum       | O(n) | O(1)      | Single pass            |
| Second Maximum     | O(n) | O(1)      | Single pass, 2 vars    |
| Check Sorted       | O(n) | O(1)      | Early break possible   |
| Remove Duplicates  | O(n) | O(n)/O(1) | Set/Two-pointer method |
| Left Rotate by One | O(n) | O(1)      | Single pass, in-place  |
| Rotate by K        | O(n) | O(1)      | Reversal algorithm     |
| Move Zeroes to End | O(n) | O(1)      | Two-pointer, in-place  |
| Linear Search      | O(n) | O(1)      | Single pass            |

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

---

_Last Updated: June 2025_
