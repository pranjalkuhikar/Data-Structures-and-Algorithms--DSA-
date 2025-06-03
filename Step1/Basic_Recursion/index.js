// let n = 5;
// function printName(n) {
//   if (n === 0) return;
//   console.log("Pranjal");
//   printName(n - 1);
// }
// printName(n);

let n = 5;
function printNumber(n) {
  if (n === 0) return;
  console.log(n);
  printNumber(n - 1);
}
printNumber(n);
