# Advanced Sorting Algorithms Implementation 🔄

## Table of Contents

- [Overview](#overview)
- [Algorithms Covered](#algorithms-covered)
- [Implementation Details](#implementation-details)
- [Time & Space Complexity Analysis](#time--space-complexity-analysis)
- [Usage Guide](#usage-guide)
- [Visual Explanation](#visual-explanation)

## Overview

This repository contains implementation of advanced sorting algorithms using recursive approaches. Each algorithm is implemented in JavaScript with detailed explanations and complexity analysis.

## Algorithms Covered

1. [Merge Sort](#1-merge-sort)
2. [Recursive Bubble Sort](#2-recursive-bubble-sort)
3. [Recursive Insertion Sort](#3-recursive-insertion-sort)
4. [Quick Sort](#4-quick-sort)

## Implementation Details

### 1. Merge Sort

**Concept**: Divide and Conquer approach

#### Step-by-Step Working:

1. **Divide Phase**:

   ```javascript
   function divide(arr, first, last) {
     if (first === last) return;
     let mid = Math.floor((first + last) / 2);
     divide(arr, first, mid);
     divide(arr, mid + 1, last);
     merge(arr, first, mid, last);
   }
   ```

   - Recursively splits array into two halves
   - Continues until single elements remain

2. **Merge Phase**:

   ```javascript
   function merge(arr, first, mid, last) {
     let temp = new Array(last - first + 1);
     let i = first;
     let j = mid + 1;
     let k = 0;
     let p = 0;
     let t = first;
     while (i <= mid && j <= last) {
       if (arr[i] <= arr[j]) {
         temp[k++] = arr[i++];
       } else {
         temp[k++] = arr[j++];
       }
     }
     while (i <= mid) {
       temp[k++] = arr[i++];
     }
     while (j <= last) {
       temp[k++] = arr[j++];
     }
     while (p < temp.length) {
       arr[t++] = temp[p++];
     }
   }
   ```

# Detailed Algorithm Explanations

## Merge Sort Step-by-Step

1. **Division Process**:

   - Initial Array: `[3, 2, 8, 5, 1, 4, 23]`
   - First Split: `[3, 2, 8]` and `[5, 1, 4, 23]`
   - Second Split: `[3]`, `[2, 8]` and `[5, 1]`, `[4, 23]`
   - Final Split: `[3]`, `[2]`, `[8]` and `[5]`, `[1]`, `[4]`, `[23]`

2. **Merging Process**:
   ```
   Step 1: [2, 3, 8] ← Merge [3] with [2, 8]
   Step 2: [1, 5] and [4, 23] ← Merge individual elements
   Step 3: [1, 4, 5, 23] ← Merge two sorted halves
   Final: [1, 2, 3, 4, 5, 8, 23] ← Final merge of all elements
   ```

### Merge Sort Process

```
[3, 2, 8, 5, 1, 4, 23]
↙️              ↘️
[3, 2, 8]    [5, 1, 4, 23]
↙️    ↘️      ↙️     ↘️
[3] [2, 8]  [5, 1] [4, 23]
```

### 2. Recursive Bubble Sort

**Concept**: Recursive implementation of bubble sort

#### Working Process:

```javascript
function bubbleSortRecursive(arr, n) {
  if (n === 1) return; // Base case
  // One pass of bubble sort
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
  // Recursive call for remaining elements
  bubbleSortRecursive(arr, n - 1);
}
```

# Detailed Algorithm Explanations

## Recursive Bubble Sort Step-by-Step

Using array: `[3, 2, 8, 5, 1, 4]`

```
First Call (n=6):
[3, 2, 8, 5, 1, 4] → [2, 3, 5, 1, 4, 8]
Second Call (n=5):
[2, 3, 5, 1, 4, 8] → [2, 3, 1, 4, 5, 8]
Third Call (n=4):
[2, 3, 1, 4, 5, 8] → [2, 1, 3, 4, 5, 8]
Fourth Call (n=3):
[2, 1, 3, 4, 5, 8] → [1, 2, 3, 4, 5, 8]
Fifth Call (n=2):
[1, 2, 3, 4, 5, 8] → [1, 2, 3, 4, 5, 8]
```

### 3. Recursive Insertion Sort

**Concept**: Building sorted array recursively

#### Implementation Details:

```javascript
function insertionSortRecursive(arr, n) {
  if (n <= 1) return; // Base case

  // Sort first n-1 elements
  insertionSortRecursive(arr, n - 1);

  // Insert last element at correct position
  let key = arr[n - 1];
  let j = n - 2;
  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = key;
}
```

# Detailed Algorithm Explanations

## Recursive Insertion Sort Step-by-Step

Using array: `[3, 2, 8, 5, 1]`

```
Initial call with n=5:
1. First recursive call (n=4): [3, 2, 8, 5]
   2. Second recursive call (n=3): [3, 2, 8]
      3. Third recursive call (n=2): [3, 2]
         4. Fourth recursive call (n=1): [3]
         5. Insert 2: [2, 3]
      6. Insert 8: [2, 3, 8]
   7. Insert 5: [2, 3, 5, 8]
8. Insert 1: [1, 2, 3, 5, 8]
```

### 4. Quick Sort

**Concept**: Partition-based sorting

#### Key Components:

1. **Partition Function**:

   ```javascript
   function findPivotIdx(arr, first, last) {
     let pivot = arr[first];
     let i = first + 1;
     let j = last;
     while (i <= j) {
       while (i <= last && arr[i] <= pivot) i++;
       while (j >= first && arr[j] > pivot) j--;
       if (i < j) {
         [arr[i], arr[j]] = [arr[j], arr[i]];
         i++;
         j--;
       }
     }
     [arr[first], arr[j]] = [arr[j], arr[first]];
     return j;
   }
   ```

2. **Quick Sort Function**:
   ```javascript
   function quickSort(arr, first, last) {
     if (first >= last) return;
     let pivotIdx = findPivotIdx(arr, first, last);
     quickSort(arr, first, pivotIdx - 1);
     quickSort(arr, pivotIdx + 1, last);
   }
   ```

# Detailed Algorithm Explanations

## Quick Sort Step-by-Step

Using array: `[3, 2, 8, 5, 1, 4]`

```
1. First Partition (pivot=3):
   [3, 2, 8, 5, 1, 4]
   → [2, 1, 3, 5, 8, 4]

2. Left subarray [2, 1]:
   pivot=2
   → [1, 2]

3. Right subarray [5, 8, 4]:
   pivot=5
   → [4, 5, 8]

Final: [1, 2, 3, 4, 5, 8]
```

### Quick Sort Process

```
Pivot: 3
[3, 2, 8, 5, 1, 4, 23]
→ [2, 1, 3, 5, 8, 4, 23]
     ↙️        ↘️
[2, 1]    [5, 8, 4, 23]
```

## Time & Space Complexity Analysis

| Algorithm           | Time (Average) | Time (Worst) | Space    |
| ------------------- | -------------- | ------------ | -------- |
| Merge Sort          | O(n log n)     | O(n log n)   | O(n)     |
| Recursive Bubble    | O(n²)          | O(n²)        | O(n)     |
| Recursive Insertion | O(n²)          | O(n²)        | O(n)     |
| Quick Sort          | O(n log n)     | O(n²)        | O(log n) |

## Usage Guide

```javascript
// Example usage for any sorting algorithm
let arr = [3, 2, 8, 5, 1, 4, 23];

// For Merge Sort
divide(arr, 0, arr.length - 1);

// For Recursive Bubble Sort
bubbleSortRecursive(arr, arr.length);

// For Recursive Insertion Sort
insertionSortRecursive(arr, arr.length);

// For Quick Sort
quickSort(arr, 0, arr.length - 1);
```

### Key Points for Each Algorithm:

1. **Merge Sort**:

   - Divides until single elements
   - Merges while sorting
   - Uses extra space for merging
   - Stable sorting algorithm

2. **Recursive Bubble Sort**:

   - Makes n-1 recursive calls
   - Each call reduces array size by 1
   - Moves largest element to end in each iteration

3. **Recursive Insertion Sort**:

   - Builds sorted array from left to right
   - Makes recursive calls before insertion
   - Each call sorts one more element

4. **Quick Sort**:
   - Pivot selection is crucial
   - Partitioning creates two subarrays
   - Best when pivot divides array equally
   - In-place sorting

## Contributing

Feel free to contribute by:

- Adding new sorting algorithms
- Optimizing existing implementations
- Improving documentation
- Adding test cases

---

Created with 💻 by Pranjal
Last Updated: June 2025
