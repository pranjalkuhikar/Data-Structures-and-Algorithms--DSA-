// Question 1: Selection Sort
// let arr = [13, 46, 24, 52, 20, 9];
// for (let i = 0; i < arr.length - 1; i++) {
//   let min = i;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] < arr[min]) min = j;
//     if (min !== i) {
//       [arr[min], arr[i]] = [arr[i], arr[min]];
//     }
//   }
// }
// console.log(arr);

// Question 2: Bubble Sort
// let arr = [13, 46, 24, 52, 20, 9];
// for (let i = 0; i < arr.length - 1; i++) {
//   let sorted = true;
//   for (let j = 0; j < arr.length - 1 - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       sorted = false;
//     }
//   }
//   if (sorted) break;
// }
// console.log(arr);

// Question 3: Insertion Sort
// let arr = [13, 46, 24, 52, 20, 9];
// for (let i = 0; i < arr.length; i++) {
//   let j = i;
//   while (j > 0 && arr[j - 1] > arr[j]) {
//     [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
//     j--;
//   }
// }
// console.log(arr);
