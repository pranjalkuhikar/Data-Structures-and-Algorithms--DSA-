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

let n = 36;
// for (let i = 0; i <= n; i++) {
//   if (n % i === 0) {
//     console.log(i);
//   }
// }
for (let i = 0; i <= Math.floor(Math.sqrt(n)); i++) {
  if (n % i === 0) {
    console.log(i);
    if (i !== n / i) {
      console.log(n / i);
    }
  }
}
