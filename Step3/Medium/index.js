// Question 1: Two Sum
// Time Complexity: O(n^2) - nested loops
// Space Complexity: O(1) - in-place modification
let arr = [2, 6, 5, 8, 11];
let k = 14;
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    if (arr[i] + arr[j] === k) {
      console.log(arr[i], arr[j]);
    }
  }
}
