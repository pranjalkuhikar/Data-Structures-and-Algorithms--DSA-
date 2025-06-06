# Array Problems Solutions 📊

## Table of Contents

- [Overview](#overview)
- [Problems & Solutions](#problems--solutions)
  - [1. Find Maximum Element](#1-find-maximum-element)
  - [2. Find Second Maximum](#2-find-second-maximum)
  - [3. Check Sorted Array](#3-check-sorted-array)
  - [4. Remove Duplicates](#4-remove-duplicates)
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

## Time & Space Complexity

| Problem           | Time | Space     | Notes                  |
| ----------------- | ---- | --------- | ---------------------- |
| Find Maximum      | O(n) | O(1)      | Single pass            |
| Second Maximum    | O(n) | O(1)      | Single pass, 2 vars    |
| Check Sorted      | O(n) | O(1)      | Early break possible   |
| Remove Duplicates | O(n) | O(n)/O(1) | Set/Two-pointer method |

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
