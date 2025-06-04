let arr = [13, 46, 24, 52, 20, 9];
for (let i = 0; i < arr.length - 1; i++) {
  let min = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[min]) min = j;
    [arr[min], arr[i]] = [arr[i], arr[min]];
  }
}
console.log(arr);
