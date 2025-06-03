// let n = 5;
// function printName(n) {
//   if (n === 0) return;
//   console.log("Pranjal");
//   printName(n - 1);
// }
// printName(n);

// let n = 5;
// function printNumber(n) {
//   if (n === 0) return;
//   console.log(n);
//   printNumber(n - 1);
// }
// printNumber(n);

// let n = 5;
// function printNumber(n) {
//   if (n === 0) return;
//   printNumber(n - 1);
//   console.log(n);
// }
// printNumber(n);

// let n = 5;
// function sumOfNumber(n) {
//   if (n === 0) return 0;
//   return n + sumOfNumber(n - 1);
// }
// console.log(sumOfNumber(n));

// let n = 5;
// function factorial(n) {
//   if (n === 1) return n;
//   return n * factorial(n - 1);
// }
// console.log(factorial(n));

// let n = 5;
// let arr = [5, 4, 3, 2, 1];
// function reverseArray(i, arr) {
//   if (i >= arr.length / 2) return arr;
//   [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
//   return reverseArray(i + 1, arr);
// }
// console.log(reverseArray(n, arr));

let str = "ABCDCBA";
function checkPalindrome(i, str) {
  if (i >= str.length / 2) return true;
  if (str[i] !== str[str.length - 1 - i]) return false;
  return checkPalindrome(i + 1, str);
}
console.log(checkPalindrome(0, str) ? "Palindrome" : "Not a Palindrome");
