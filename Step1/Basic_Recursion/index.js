let n = 5;
function printName(n) {
  if (n === 0) return;
  console.log("Pranjal");
  printName(n - 1);
}
printName(n);
