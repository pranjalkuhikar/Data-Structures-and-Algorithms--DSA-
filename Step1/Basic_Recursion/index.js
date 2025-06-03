let n = 5;

// Question 1: Print name N times using recursion
// function printName(n) {
//   if (n === 0) return;
//   console.log("Pranjal");
//   printName(n - 1);
// }
// printName(n);

// Question 2: Print numbers from N to 1 using recursion
// function printNumber(n) {
//   if (n === 0) return;
//   console.log(n);
//   printNumber(n - 1);
// }
// printNumber(n);

// Question 3: Print numbers from 1 to N using recursion
// function printNumber(n) {
//   if (n === 0) return;
//   printNumber(n - 1);
//   console.log(n);
// }
// printNumber(n);

// Question 4: Calculate sum of first N natural numbers using recursion
// function sumOfNumber(n) {
//   if (n === 0) return 0;
//   return n + sumOfNumber(n - 1);
// }
// console.log(sumOfNumber(n));

// Question 5: Calculate factorial of N using recursion
// function factorial(n) {
//   if (n === 1) return n;
//   return n * factorial(n - 1);
// }
// console.log(factorial(n));

// Question 6: Reverse an array using recursion
// let arr = [5, 4, 3, 2, 1];
// function reverseArray(i, arr) {
//   if (i >= arr.length / 2) return arr;
//   [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
//   return reverseArray(i + 1, arr);
// }
// console.log(reverseArray(0, arr));

// Question 7: Check if a string is palindrome using recursion
// let str = "ABCDCBA";
// function checkPalindrome(i, str) {
//   if (i >= str.length / 2) return true;
//   if (str[i] !== str[str.length - 1 - i]) return false;
//   return checkPalindrome(i + 1, str);
// }
// console.log(checkPalindrome(0, str) ? "Palindrome" : "Not a Palindrome");

// Question 8: Print Nth Fibonacci number using recursion
// function fibonacci(n) {
//   if (n === 0 || n == 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(6));

// Question 9: Print Fibonacci series up to N terms using recursion
// function printFibonacci(n) {
//   if (n === 0 || n == 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// for (let i = 0; i < 6; i++) {
//     console.log(fibonacci(i));
// }
