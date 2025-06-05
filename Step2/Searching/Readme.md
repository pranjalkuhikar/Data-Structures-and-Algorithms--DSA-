# 🔍 Searching Algorithms Implementation

A collection of common searching algorithms implemented in JavaScript with detailed explanations and complexity analysis.

## 📝 Table of Contents

- [Overview](#overview)
- [Algorithms Included](#algorithms-included)
- [Time & Space Complexity](#time--space-complexity)
- [Usage](#usage)
- [Examples](#examples)

## 🎯 Overview

This repository contains implementation of fundamental searching algorithms:

- Linear Search: Sequential search through array elements
- Binary Search: Efficient search for sorted arrays using divide & conquer

## 🚀 Algorithms Included

### 1. Linear Search

```javascript
function linearSearch(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) return i;
  }
  return -1;
}
```

- Simple and straightforward approach
- Works on unsorted arrays
- Returns index of element if found, -1 otherwise

### 2. Binary Search

```javascript
function binarySearch(arr, k) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === k) return mid;
    else if (arr[mid] < k) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
```

- Requires sorted array
- Highly efficient for large datasets
- Returns index of element if found, -1 otherwise

## ⚡ Time & Space Complexity

| Algorithm     | Time Complexity | Space Complexity | Best For                    |
| ------------- | --------------- | ---------------- | --------------------------- |
| Linear Search | O(n)            | O(1)             | Unsorted arrays, small size |
| Binary Search | O(log n)        | O(1)             | Sorted arrays, large size   |

## 💻 Usage

```javascript
// Linear Search Example
let arr1 = [13, 46, 24, 52, 20, 9];
let key1 = 52;
console.log(linearSearch(arr1, key1)); // Output: 3

// Binary Search Example
let arr2 = [1, 2, 3, 4, 5, 6];
let key2 = 2;
console.log(binarySearch(arr2, key2)); // Output: 1
```

## 🌟 Examples

- Linear Search: Finds element 52 at index 3
- Binary Search: Finds element 2 at index 1 (array must be sorted!)

## ⚠️ Important Notes

1. Linear Search:

   - Works on both sorted and unsorted arrays
   - Simple but less efficient for large datasets

2. Binary Search:
   - Requires sorted array
   - Very efficient for large datasets
   - Not suitable for frequently updated arrays

## 👨‍💻 Contributing

Feel free to contribute to this project by:

- Adding new searching algorithms
- Optimizing existing implementations
- Improving documentation
- Adding test cases
