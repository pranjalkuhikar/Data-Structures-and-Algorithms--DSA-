// Question 1:Counts the number of digits in a given integer.
// let n = 12345;
// let count = 0;
// while (n != 0) {
//   let lastDigit = n % 10;
//   count++;
//   n = Math.floor(n / 10);
// }
// console.log(count);

// Question 2:Reverses the digits of a given integer.
// let n = 12345;
// let rev = 0;
// while (n != 0) {
//   let lastDigit = n % 10;
//   rev = rev * 10 + lastDigit;
//   n = Math.floor(n / 10);
// }
// console.log(rev);

// Question 3:Checks if a given integer is a palindrome number.
// let n = 4554;
// let rev = 0;
// let temp = n;
// while (n != 0) {
//   let lastDigit = n % 10;
//   rev = rev * 10 + lastDigit;
//   n = Math.floor(n / 10);
// }
// console.log(temp === rev ? "Palindrome" : "Not Palindrome");

// Question 4:Calculates the GCD (Greatest Common Divisor) and LCM (Least Common Multiple) of two given integers.
// let n1 = 9;
// let n2 = 12;
// let temp1 = n1;
// let temp2 = n2;
// while (n2 != 0) {
//   let temp = n2;
//   n2 = n1 % n2;
//   n1 = temp;
// }
// let GCD = n1;
// console.log(GCD);
// let LCM = (temp1 * temp2) / GCD;
// console.log(LCM);

// Question 5:Checks if a given integer is an Armstrong number.
// let n = 1634;
// let copy = n;
// let temp = n;
// let count = 0;
// let sum = 0;
// while (n != 0) {
//   count++;
//   n = Math.floor(n / 10);
// }
// while (temp != 0) {
//   let lastDigit = temp % 10;
//   sum += lastDigit ** count;
//   temp = Math.floor(temp / 10);
// }
// console.log(sum === copy ? "Armstrong Number" : "Not Armstrong Number");

// Question 6:Finds and prints all the divisors of a given integer.
// let n = 36;
// // for (let i = 0; i <= n; i++) {
// //   if (n % i === 0) {
// //     console.log(i);
// //   }
// // }
// for (let i = 0; i <= Math.floor(Math.sqrt(n)); i++) {
//   if (n % i === 0) {
//     console.log(i);
//     if (i !== n / i) {
//       console.log(n / i);
//     }
//   }
// }

// Question 7:Checks if a given integer is a prime number.
// let n = 10;
// let count = 0;
// for (let j = 1; j <= Math.floor(Math.sqrt(n)); j++) {
//   if (n % j === 0) {
//     count++;
//     if (n / j !== j) {
//       count++;
//     }
//   }
// }
// console.log(count === 2 ? "Prime Number" : "Not a Prime Number");
