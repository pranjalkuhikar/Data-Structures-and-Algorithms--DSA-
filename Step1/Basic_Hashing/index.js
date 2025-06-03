// Question 1: Count the frequency of each element in an array.
// let arr = [10, 5, 10, 15, 10, 5];
// let map = new Map();
// for (let i = 0; i < arr.length; i++) {
//   // Method 1
//   //   if (map.has(arr[i])) {
//   //     map.set(arr[i], map.get(arr[i]) + 1);
//   //   } else {
//   //     map.set(arr[i], 1);
//   //   }
//   // Method 2
//   map.set(arr[i], (map.get(arr[i]) || 0) + 1);
// }
// console.log(map);

// Question 2: Find the most and least frequent elements in an array.
// let arr = [10, 5, 10, 15, 10, 5];
// let map = new Map();
// for (let i = 0; i < arr.length; i++) {
//   map.set(arr[i], (map.get(arr[i]) || 0) + 1);
// }
// let max = 0;
// let min = Infinity;
// let maxKey, minKey;
// for (let [key, value] of map) {
//   if (value > max) {
//     max = value;
//     maxKey = key;
//   }
//   if (value < min) {
//     min = value;
//     minKey = key;
//   }
// }
// console.log("Frequency Map:", map);
// console.log("Most frequent:", maxKey, "Least frequent:", minKey);
