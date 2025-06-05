function linearSearch(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      return i;
    }
  }
  return -1;
}

let arr = [13, 46, 24, 52, 20, 9];
let k = 52;
console.log(linearSearch(arr, k));
