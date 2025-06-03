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

// let n = 4554;
// let rev = 0;
// let temp = n;
// while (n != 0) {
//   let lastDigit = n % 10;
//   rev = rev * 10 + lastDigit;
//   n = Math.floor(n / 10);
// }
// console.log(temp === rev ? "Palindrome" : "Not Palindrome");

let n1 = 9;
let n2 = 12;
let temp1 = n1;
let temp2 = n2;
while (n2 != 0) {
  let temp = n2;
  n2 = n1 % n2;
  n1 = temp;
}
let GCD = n1;
console.log(GCD);
let LCM = (temp1 * temp2) / GCD;
console.log(LCM);
