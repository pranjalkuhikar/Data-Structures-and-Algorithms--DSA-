// Question 1: Find the maximum element in an array
// function findLargest(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// let arr = [8, 10, 5, 7, 9];
// console.log(findLargest(arr));

// Question 2: Find the second maximum element in an array
// function findSecondLargest(arr) {
//   let max = arr[0];
//   let sMax = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       sMax = max;
//       max = arr[i];
//     } else if (arr[i] > sMax && arr[i] != max) {
//       sMax = arr[i];
//     }
//   }
//   return sMax;
// }
// let arr = [8, 10, 10, 9, 5, 7, 9];
// console.log(findSecondLargest(arr));

// Question 3: Check if an array is sorted
// function sortedArray(arr) {
//   let isSorted = true;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       isSorted = false;
//       break;
//     }
//   }
//   return isSorted;
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(sortedArray(arr));

// Question 4: Remove duplicates from an array
function removeDuplicateSet(arr) {
  let set = new Set(arr);
  return set;
}
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
let arr = [1, 1, 2, 2, 3, 3, 4, 5, 5];
console.log([...removeDuplicateSet(arr)]);
// If when array is sorted
let n = removeDuplicate(arr);
for (let i = 0; i < n; i++) {
  console.log(arr[i]);
}
