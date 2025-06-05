// Question 1: Merge Sort
// Description: Sort an array using divide and conquer approach by recursively dividing
// the array into two halves and merging them in sorted order
// Time Complexity: O(n log n)
// Space Complexity: O(n)
// function merge(arr, first, mid, last) {
//   let temp = new Array(last - first + 1);
//   let i = first;
//   let j = mid + 1;
//   let k = 0;
//   let p = 0;
//   let t = first;
//   while (i <= mid && j <= last) {
//     if (arr[i] <= arr[j]) {
//       temp[k++] = arr[i++];
//     } else {
//       temp[k++] = arr[j++];
//     }
//   }
//   while (i <= mid) {
//     temp[k++] = arr[i++];
//   }
//   while (j <= last) {
//     temp[k++] = arr[j++];
//   }
//   while (p < temp.length) {
//     arr[t++] = temp[p++];
//   }
// }
// function divide(arr, first, last) {
//   if (first === last) return;
//   let mid = Math.floor((first + last) / 2);
//   divide(arr, first, mid);
//   divide(arr, mid + 1, last);
//   merge(arr, first, mid, last);
// }
// let arr = [3, 2, 8, 5, 1, 4, 23];
// divide(arr, 0, arr.length - 1);
// console.log(arr);

// Question 2: Recursive Bubble Sort
// Description: Sort an array using bubble sort technique recursively by comparing
// adjacent elements and moving largest to end in each iteration
// Time Complexity: O(n²)
// Space Complexity: O(n) - due to recursion stack
// function bubbleSortRecursive(arr, n) {
//   if (n === 1) return;
//   for (let i = 0; i < n - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//     }
//   }
//   bubbleSortRecursive(arr, n - 1);
// }
// let arr = [3, 2, 8, 5, 1, 4, 23];
// bubbleSortRecursive(arr, arr.length);
// console.log(arr);

// Question 3: Recursive Insertion Sort
// Description: Sort an array using insertion sort recursively by maintaining a sorted
// subarray and inserting elements one by one
// Time Complexity: O(n²)
// Space Complexity: O(n) - due to recursion stack
// function insertionSortRecursive(arr, n) {
//   if (n <= 1) return;
//   insertionSortRecursive(arr, n - 1);
//   let key = arr[n - 1];
//   let j = n - 2;
//   while (j >= 0 && arr[j] > key) {
//     arr[j + 1] = arr[j];
//     j--;
//   }
//   arr[j + 1] = key;
// }
// let arr = [3, 2, 8, 5, 1, 4, 23];
// insertionSortRecursive(arr, arr.length);
// console.log(arr);

// Question 4: Quick Sort
// Description: Sort an array using quick sort algorithm by selecting a pivot element
// and partitioning the array around it recursively
// Time Complexity: O(n log n) average case, O(n²) worst case
// Space Complexity: O(log n) - due to recursion stack
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
function quickSort(arr, first, last) {
  if (first >= last) return;
  let pivotIdx = findPivotIdx(arr, first, last);
  quickSort(arr, first, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, last);
}
let arr = [3, 2, 8, 5, 1, 4, 23];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
