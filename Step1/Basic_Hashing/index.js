let arr = [10, 5, 10, 15, 10, 5];
let map = new Map();
for (let i = 0; i < arr.length; i++) {
  // Method 1
  //   if (map.has(arr[i])) {
  //     map.set(arr[i], map.get(arr[i]) + 1);
  //   } else {
  //     map.set(arr[i], 1);
  //   }
  // Method 2
  map.set(arr[i], (map.get(arr[i]) || 0) + 1);
}
console.log(map);
