// Question 1: Selection Sort
// Description: Find minimum element and place it at beginning in each iteration
// Time Complexity: O(n²)
// Space Complexity: O(1)
// function selectionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) min = j;
//     }
//     if (min !== i) {
//       [arr[min], arr[i]] = [arr[i], arr[min]];
//     }
//   }
//   return arr;
// }
// let arr = [13, 46, 24, 52, 20, 9];
// console.log(selectionSort(arr));

// Question 2: Bubble Sort
// Description: Repeatedly swap adjacent elements if they are in wrong order
// Time Complexity: O(n²)
// Space Complexity: O(1)
// Best Case: O(n) when array is already sorted
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let sorted = true;
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         sorted = false;
//       }
//     }
//     if (sorted) break;
//   }
//   return arr;
// }
// let arr = [13, 46, 24, 52, 20, 9];
// console.log(bubbleSort(arr));

// Question 3: Insertion Sort
// Description: Build sorted array one element at a time
// Time Complexity: O(n²)
// Space Complexity: O(1)
// Best Case: O(n) when array is nearly sorted
// function insertionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let j = i;
//     while (j > 0 && arr[j - 1] > arr[j]) {
//       [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
//       j--;
//     }
//   }
//   return arr;
// }
// let arr = [13, 46, 24, 52, 20, 9];
// console.log(insertionSort(arr));
