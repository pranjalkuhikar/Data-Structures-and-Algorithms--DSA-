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

function bubbleSortRecursive(arr, n) {
  if (n === 1) return;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
  bubbleSortRecursive(arr, n - 1);
}

let arr = [3, 2, 8, 5, 1, 4, 23];
bubbleSortRecursive(arr, arr.length);
console.log(arr);
