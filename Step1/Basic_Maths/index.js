let n = 12345;
let count = 0;
while (n != 0) {
  let lastDigit = n % 10;
  count++;
  n = Math.floor(n / 10);
}
console.log(count);
