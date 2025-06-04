# Sorting Algorithms Implementation Guide 📊

## Table of Contents

- [Introduction](#introduction)
- [Algorithms Overview](#algorithms-overview)
- [Implementation Details](#implementation-details)
- [Code Examples](#code-examples)
- [Performance Analysis](#performance-analysis)
- [Visual Examples](#visual-examples)

## Introduction

This guide covers three fundamental sorting algorithms with JavaScript implementations:

- Selection Sort
- Bubble Sort
- Insertion Sort

## Algorithms Overview

### 1. Selection Sort

**Core Idea:** Select minimum element and swap with first position of unsorted array
**Detailed Process:**

- Divides array into sorted and unsorted parts
- Finds minimum element from unsorted array
- Swaps it with first unsorted position
- Sorted array builds from left to right

```javascript
let arr = [13, 46, 24, 52, 20, 9];
for (let i = 0; i < arr.length - 1; i++) {
  let min = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[min]) min = j;
  }
  if (min !== i) {
    [arr[min], arr[i]] = [arr[i], arr[min]];
  }
}
```

**Detailed Step-by-Step:**

```
Initial Array: [13, 46, 24, 52, 20, 9]
Pass 1: Find min(9):  [9│ 46, 24, 52, 20, 13]   ← 9 is smallest, swap with 13
Pass 2: Find min(13): [9, 13│ 24, 52, 20, 46]   ← 13 is smallest in remaining
Pass 3: Find min(20): [9, 13, 20│ 52, 24, 46]   ← 20 is smallest in remaining
Pass 4: Find min(24): [9, 13, 20, 24│ 46, 52]   ← 24 is smallest in remaining
Pass 5: Find min(46): [9, 13, 20, 24, 46, 52]   ← 46 is smallest in remaining
Final Sorted Array:   [9, 13, 20, 24, 46, 52]   ← Array is sorted
```

### 2. Bubble Sort

**Core Idea:** Repeatedly push maximum element to end through adjacent swaps
**Detailed Process:**

- Compare adjacent elements
- Swap if left > right
- Largest element "bubbles up" to end in each pass
- Process continues until no swaps needed

```javascript
let arr = [13, 46, 24, 52, 20, 9];
for (let i = 0; i < arr.length - 1; i++) {
  let sorted = true;
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      sorted = false;
    }
  }
  if (sorted) break;
}
```

**Detailed Step-by-Step:**

```
Initial Array: [13, 46, 24, 52, 20, 9]
Pass 1: Compare and Swap:
        [13, 24, 46, 20, 9, │52]   ← 52 bubbles to end
Pass 2: Compare and Swap:
        [13, 24, 20, 9, │46, 52]   ← 46 finds its place
Pass 3: Compare and Swap:
        [13, 20, 9, │24, 46, 52]   ← 24 finds its place
Pass 4: Compare and Swap:
        [13, 9, │20, 24, 46, 52]   ← 20 finds its place
Final Sorted Array:
        [9, 13, 20, 24, 46, 52]    ← Array is sorted
```

### 3. Insertion Sort

**Core Idea:** Take one element and insert it at its correct position in sorted portion
**Detailed Process:**

- Start with first element as sorted
- Pick next element (key)
- Compare key with sorted portion
- Shift greater elements right
- Insert key at correct position
- Repeat until all elements are placed

```javascript
let arr = [13, 46, 24, 52, 20, 9];
for (let i = 0; i < arr.length; i++) {
  let j = i;
  while (j > 0 && arr[j - 1] > arr[j]) {
    [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
    j--;
  }
}
```

**Detailed Step-by-Step:**

```
Initial Array: [13, 46, 24, 52, 20, 9]
Pass 1: Take 13:    [13│ 46, 24, 52, 20, 9]    ← First element is sorted
Pass 2: Take 46:    [13, 46│ 24, 52, 20, 9]    ← 46 > 13, stays right
Pass 3: Take 24:    [13, 24, 46│ 52, 20, 9]    ← 24 moves between 13,46
Pass 4: Take 52:    [13, 24, 46, 52│ 20, 9]    ← 52 > all, stays right
Pass 5: Take 20:    [13, 20, 24, 46, 52│ 9]    ← 20 finds its spot
Final: Take 9:      [9, 13, 20, 24, 46, 52]    ← 9 moves to start
```

## Performance Analysis

| Algorithm      | Best Case | Average Case | Worst Case | Space |
| -------------- | --------- | ------------ | ---------- | ----- |
| Selection Sort | O(n²)     | O(n²)        | O(n²)      | O(1)  |
| Bubble Sort    | O(n)      | O(n²)        | O(n²)      | O(1)  |
| Insertion Sort | O(n)      | O(n²)        | O(n²)      | O(1)  |

## Implementation Tips

1. **Selection Sort:**

   - Best for small arrays
   - Minimizes number of swaps
   - Not stable sorting

2. **Bubble Sort:**

   - Easy to implement
   - Adaptive with flag
   - Good for nearly sorted arrays

3. **Insertion Sort:**
   - Efficient for small data
   - Works well with nearly sorted arrays
   - Online algorithm (can sort as data arrives)

## Testing

```javascript
// Test cases
const testArrays = [
  [13, 46, 24, 52, 20, 9], // Random
  [1, 2, 3, 4, 5, 6], // Sorted
  [6, 5, 4, 3, 2, 1], // Reverse sorted
];
```

---

## How to Use

1. Copy the desired algorithm
2. Paste into your JavaScript file
3. Call the function with your array
4. Check the sorted result

---

_Last Updated: June 2025_
_Author: Pranjal_
