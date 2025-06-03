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

let n = 5;
function factorial(n) {
  if (n === 1) return n;
  return n * factorial(n - 1);
}
console.log(factorial(n));
