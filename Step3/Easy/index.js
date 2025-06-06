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

let arr = [8, 10, 10, 9, 5, 7, 9];
console.log(findSecondLargest(arr));
