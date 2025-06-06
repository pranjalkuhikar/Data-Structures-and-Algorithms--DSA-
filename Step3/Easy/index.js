// Question 1: Find the maximum element in an array
function findLargest(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let arr = [8, 10, 5, 7, 9];
console.log(findLargest(arr));
