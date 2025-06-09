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

1. Store the first element of the array in a temporary variable `temp`. This is `arr[0]`.
2. Iterate from the first element up to the second-to-last element (`i` from `0` to `arr.length - 2`). In each step, shift the element `arr[i+1]` to the current position `arr[i]`.
   - `arr[0] = arr[1]`
   - `arr[1] = arr[2]`
   - ...
   - `arr[arr.length - 2] = arr[arr.length - 1]`
3. After the loop, assign the value stored in `temp` (the original first element) to the last position of the array (`arr[arr.length - 1]`).

**Example:**

```javascript
Input: arr = [1, 2, 3, 4, 5];
Output: [2, 3, 4, 5, 1];
```

**Step-by-Step:**

```
Let arr = [1, 2, 3, 4, 5]

1. temp = arr[0] = 1

2. Loop (i from 0 to 3):
   - i = 0: arr[0] = arr[1]  => arr becomes [2, 2, 3, 4, 5]
   - i = 1: arr[1] = arr[2]  => arr becomes [2, 3, 3, 4, 5]
   - i = 2: arr[2] = arr[3]  => arr becomes [2, 3, 4, 4, 5]
   - i = 3: arr[3] = arr[4]  => arr becomes [2, 3, 4, 5, 5]

3. arr[arr.length - 1] = temp  => arr[4] = 1
   arr becomes [2, 3, 4, 5, 1]

Final:  arr = [2, 3, 4, 5, 1]
```

### 6. Rotate Array by K Elements

**Problem:** Rotate the elements of an array to the left or right by `k` positions.

**Solution (Optimal Approach using Reversal Algorithm):**

The reversal algorithm is an efficient way to rotate an array.
For **left rotation** by `k` positions:

1. Reverse the first `k` elements (from index `0` to `k-1`).
2. Reverse the remaining `n-k` elements (from index `k` to `n-1`).
3. Reverse the entire array (from index `0` to `n-1`).

For **right rotation** by `k` positions:

1. Reverse the last `k` elements (from index `n-k` to `n-1`).
2. Reverse the first `n-k` elements (from index `0` to `n-k-1`).
3. Reverse the entire array (from index `0` to `n-1`).
   Alternatively, a right rotation by `k` is equivalent to a left rotation by `n-k`. Or, more simply:
4. Reverse the first `n-k` elements (from index `0` to `n-k-1`).
5. Reverse the last `k` elements (from index `n-k` to `n-1`).
6. Reverse the entire array.

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
  k = k % n; // Handle cases where k is greater than array length
  if (k === 0) return arr; // No rotation needed

  reverse(arr, 0, k - 1); // Reverse the first k elements
  reverse(arr, k, n - 1); // Reverse the remaining n-k elements
  reverse(arr, 0, n - 1); // Reverse the entire array
  return arr;
}

// console.log(leftRotation([...arr], k)); // Output: [3, 4, 5, 1, 2]

function rightRotation(arr, k) {
  const n = arr.length;
  k = k % n; // Handle cases where k is greater than array length
  if (k === 0) return arr; // No rotation needed

  reverse(arr, 0, n - k - 1); // Reverse the first n-k elements
  reverse(arr, n - k, n - 1); // Reverse the last k elements
  reverse(arr, 0, n - 1); // Reverse the entire array
  return arr;
}

// console.log(rightRotation([...arr], k)); // Output: [4, 5, 1, 2, 3]
```

**Explanation (Left Rotation by K):**

1. **Normalize `k`:** `k = k % arr.length`. This ensures `k` is within the valid range `[0, arr.length - 1]`. If `k` is `0`, the array is returned as is.
2. **Reverse the first `k` elements:** `reverse(arr, 0, k - 1)`. This brings the elements that will end up at the tail of the array to the front, in reversed order.
3. **Reverse the remaining `n-k` elements:** `reverse(arr, k, arr.length - 1)`. This reverses the elements that will form the head of the rotated array.
4. **Reverse the entire array:** `reverse(arr, 0, arr.length - 1)`. This final reversal places all elements in their correct rotated positions.

**Example (Left Rotation):**

```javascript
Input: (arr = [1, 2, 3, 4, 5]), (k = 2);
Output: [3, 4, 5, 1, 2];
```

**Step-by-Step (Left Rotation, arr = [1, 2, 3, 4, 5], k = 2):**
Let `n = 5`. `k = 2 % 5 = 2`.

```
Initial: arr = [1, 2, 3, 4, 5]

1. reverse(arr, 0, k-1)  => reverse(arr, 0, 1)
   arr becomes [2, 1, 3, 4, 5]

2. reverse(arr, k, n-1) => reverse(arr, 2, 4)
   arr becomes [2, 1, 5, 4, 3]

3. reverse(arr, 0, n-1) => reverse(arr, 0, 4)
   arr becomes [3, 4, 5, 1, 2]

Final:  arr = [3, 4, 5, 1, 2]
```

**Example (Right Rotation):**

```javascript
Input: (arr = [1, 2, 3, 4, 5]), (k = 2);
Output: [4, 5, 1, 2, 3];
```

**Step-by-Step (Right Rotation, arr = [1, 2, 3, 4, 5], k = 2):**
Let `n = 5`. `k = 2 % 5 = 2`.

```
Initial: arr = [1, 2, 3, 4, 5]

1. reverse(arr, 0, n-k-1) => reverse(arr, 0, 5-2-1) => reverse(arr, 0, 2)
   arr becomes [3, 2, 1, 4, 5]

2. reverse(arr, n-k, n-1) => reverse(arr, 5-2, 5-1) => reverse(arr, 3, 4)
   arr becomes [3, 2, 1, 5, 4]

3. reverse(arr, 0, n-1) => reverse(arr, 0, 4)
   arr becomes [4, 5, 1, 2, 3]

Final:  arr = [4, 5, 1, 2, 3]
```

### 7. Move Zeroes to End

**Problem:** Given an array of integers, move all the zeroes to the end of the array while maintaining the relative order of the non-zero elements.

**Solution (Optimal Approach - Two Pointers with `while` loop):**
This approach uses two pointers, `i` and `j`, and a `while` loop.

- `i` is the main iterator that scans the array from left to right, starting at `0`.
- `j` points to the position where the next non-zero element should be placed. Initially, `j` is also `0`.

The `while` loop continues as long as `i` is less than the array's length.
Inside the loop:

- If `arr[i]` is non-zero, it means we've found an element that should be moved towards the front. We swap `arr[i]` with `arr[j]`. Then, `j` is incremented to point to the next position for a non-zero element.
- Regardless of whether `arr[i]` was zero or non-zero, `i` is incremented in each iteration to move to the next element.

```javascript
let arr = [1, 0, 2, 3, 0, 4, 0, 1]; // Example Input
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

1. Initialize two pointers:
   - `i`: This pointer will iterate through the array from the beginning to the end (`0` to `arr.length - 1`).
   - `j`: This pointer will keep track of the position where the next non-zero element should be placed. It also starts at `0`.
2. Use a `while` loop that continues as long as `i` is less than `arr.length`.
3. Inside the loop:
   a. Check if the element at `arr[i]` is **not equal to 0**.
   b. If `arr[i]` is not `0`:
   i. Swap the element `arr[i]` with the element at `arr[j]`. This moves the non-zero element `arr[i]` to the `j`-th position, which is the correct place for the next non-zero element.
   ii. Increment `j`. This means the next non-zero element found will be placed at the new `j`-th position.
   c. Increment `i` to move to the next element in the array, regardless of whether a swap occurred or not.
4. After the loop finishes, all non-zero elements will be grouped at the beginning of the array (from index `0` to `j-1`), and all zeroes will be at the end (from index `j` to `arr.length-1`). The relative order of the non-zero elements is maintained because we process them in the order they appear.

**Example:**

```javascript
Input: arr = [1, 0, 2, 3, 0, 4, 0, 1];
Output: [1, 2, 3, 4, 1, 0, 0, 0];
```

**Step-by-Step (arr = [1, 0, 2, 3, 0, 4, 0, 1]):**

```
Initial: arr = [1, 0, 2, 3, 0, 4, 0, 1], i = 0, j = 0

While i < arr.length (0 < 8):
  Iteration 1 (i=0, j=0):
    arr[0] (1) != 0 is true.
    Swap arr[0] (1) with arr[0] (1). arr = [1, 0, 2, 3, 0, 4, 0, 1].
    j becomes 1.
    i becomes 1.

While i < arr.length (1 < 8):
  Iteration 2 (i=1, j=1):
    arr[1] (0) != 0 is false.
    i becomes 2.

While i < arr.length (2 < 8):
  Iteration 3 (i=2, j=1):
    arr[2] (2) != 0 is true.
    Swap arr[2] (2) with arr[1] (0). arr = [1, 2, 0, 3, 0, 4, 0, 1].
    j becomes 2.
    i becomes 3.

While i < arr.length (3 < 8):
  Iteration 4 (i=3, j=2):
    arr[3] (3) != 0 is true.
    Swap arr[3] (3) with arr[2] (0). arr = [1, 2, 3, 0, 0, 4, 0, 1].
    j becomes 3.
    i becomes 4.

While i < arr.length (4 < 8):
  Iteration 5 (i=4, j=3):
    arr[4] (0) != 0 is false.
    i becomes 5.

While i < arr.length (5 < 8):
  Iteration 6 (i=5, j=3):
    arr[5] (4) != 0 is true.
    Swap arr[5] (4) with arr[3] (0). arr = [1, 2, 3, 4, 0, 0, 0, 1].
    j becomes 4.
    i becomes 6.

While i < arr.length (6 < 8):
  Iteration 7 (i=6, j=4):
    arr[6] (0) != 0 is false.
    i becomes 7.

While i < arr.length (7 < 8):
  Iteration 8 (i=7, j=4):
    arr[7] (1) != 0 is true.
    Swap arr[7] (1) with arr[4] (0). arr = [1, 2, 3, 4, 1, 0, 0, 0].
    j becomes 5.
    i becomes 8.

While i < arr.length (8 < 8) is false. Loop terminates.
Final: arr = [1, 2, 3, 4, 1, 0, 0, 0]
```

### 8. Linear Search

**Problem:** Given an array of integers and a target value `k`, find the index of `k` in the array. If `k` is not present, return -1.

**Solution:**
Linear search is a straightforward searching algorithm that sequentially checks each element of the list until a match is found or the whole list has been searched.

```javascript
function linearSearch(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      return i; // Element found, return its index
    }
  }
  return -1; // Element not found if loop finishes
}
```

**Explanation:**

1. **Initialization:** The search starts from the first element of the array (index `0`).
2. **Iteration:** The algorithm iterates through the array one element at a time using a loop variable `i`.
3. **Comparison:** In each iteration, it compares the current element `arr[i]` with the target value `k`.
4. **Element Found:** If `arr[i]` is equal to `k`, the target element is found. The function immediately returns the current index `i`.
5. **Element Not Found:** If the loop completes without finding any element equal to `k` (i.e., it has checked all elements), it means the target element is not present in the array. In this case, the function returns `-1`.

**Example:**

```javascript
Input: (arr = [13, 46, 24, 52, 20, 9]), (k = 52);
Output: 3;

Input: (arr = [13, 46, 24, 52, 20, 9]), (k = 100);
Output: -1;
```

**Step-by-Step (arr = [13, 46, 24, 52, 20, 9], k = 52):**

```
Initial: arr = [13, 46, 24, 52, 20, 9], k = 52

Loop starts (i = 0):
- arr[0] is 13. Is 13 === 52? No.

Increment i to 1:
- arr[1] is 46. Is 46 === 52? No.

Increment i to 2:
- arr[2] is 24. Is 24 === 52? No.

Increment i to 3:
- arr[3] is 52. Is 52 === 52? Yes. Element found!
- Return index 3.

Final Output: 3
```

**Step-by-Step (arr = [13, 46, 24, 52, 20, 9], k = 100):**

```
Initial: arr = [13, 46, 24, 52, 20, 9], k = 100

Loop starts (i = 0):
- arr[0] is 13. Is 13 === 100? No.
... (iterations for i = 1, 2, 3, 4) ...

Increment i to 5:
- arr[5] is 9. Is 9 === 100? No.

Loop finishes as i (6) is not less than arr.length (6).
Element not found.
Return -1.

Final Output: -1
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
