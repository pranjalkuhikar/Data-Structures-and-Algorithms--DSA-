// let n = 12345;
// let count = 0;
// while (n != 0) {
//   let lastDigit = n % 10;
//   count++;
//   n = Math.floor(n / 10);
// }
// console.log(count);

// let n = 12345;
// let rev = 0;
// while (n != 0) {
//   let lastDigit = n % 10;
//   rev = rev * 10 + lastDigit;
//   n = Math.floor(n / 10);
// }
// console.log(rev);

let n = 4554;
let rev = 0;
let temp = n;
while (n != 0) {
  let lastDigit = n % 10;
  rev = rev * 10 + lastDigit;
  n = Math.floor(n / 10);
}
console.log(temp === rev ? "Palindrome" : "Not Palindrome");
