# JavaScript Basic Math Operations

A collection of fundamental mathematical operations and number checks implemented in JavaScript.

## 📑 Table of Contents

1. [Count Digits](#1-count-digits)
2. [Reverse Number](#2-reverse-number)
3. [Palindrome Check](#3-palindrome-check)
4. [GCD and LCM](#4-gcd-and-lcm)
5. [Armstrong Number](#5-armstrong-number)
6. [Find Divisors](#6-find-divisors)
7. [Prime Number Check](#7-prime-number-check)

## 🧮 Operations

### 1. Count Digits

Counts the number of digits in a given integer.

```javascript
let n = 12345;
let count = 0;
while (n != 0) {
  let lastDigit = n % 10;
  count++;
  n = Math.floor(n / 10);
}
console.log("Number of digits:", count); // Output: 5
```

### 2. Reverse Number

Reverses the digits of a given integer.

```javascript
let n = 12345;
let rev = 0;
while (n != 0) {
  let lastDigit = n % 10;
  rev = rev * 10 + lastDigit;
  n = Math.floor(n / 10);
}
console.log("Reversed number:", rev); // Output: 54321
```

### 3. Palindrome Check

Checks if a given integer reads the same backward as forward.

```javascript
let n = 4554;
let rev = 0;
let temp = n;
while (n != 0) {
  let lastDigit = n % 10;
  rev = rev * 10 + lastDigit;
  n = Math.floor(n / 10);
}
console.log(temp === rev ? "Palindrome" : "Not Palindrome"); // Output: "Palindrome"
```

### 4. GCD and LCM

Calculates the Greatest Common Divisor and Least Common Multiple.

```javascript
let n1 = 9,
  n2 = 12;
let temp1 = n1,
  temp2 = n2;
while (n2 != 0) {
  let temp = n2;
  n2 = n1 % n2;
  n1 = temp;
}
let GCD = n1;
let LCM = (temp1 * temp2) / GCD;
console.log("GCD:", GCD); // Output: 3
console.log("LCM:", LCM); // Output: 36
```

### 5. Armstrong Number

Checks if a number is an Armstrong number (sum of its digits raised to the power of number of digits equals the number itself).

```javascript
let n = 1634;
let copy = n,
  temp = n;
let count = 0,
  sum = 0;
while (n != 0) {
  count++;
  n = Math.floor(n / 10);
}
while (temp != 0) {
  let lastDigit = temp % 10;
  sum += lastDigit ** count;
  temp = Math.floor(temp / 10);
}
console.log(sum === copy ? "Armstrong Number" : "Not Armstrong Number"); // Output: "Armstrong Number"
```

### 6. Find Divisors

Finds all divisors of a given number efficiently.

```javascript
let n = 36;
console.log("Divisors of", n, "are:");
for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
  if (n % i === 0) {
    console.log(i);
    if (i !== n / i) {
      console.log(n / i);
    }
  }
}
```

### 7. Prime Number Check

Checks if a given number is prime.

```javascript
let n = 10;
let count = 0;
for (let j = 1; j <= Math.floor(Math.sqrt(n)); j++) {
  if (n % j === 0) {
    count++;
    if (n / j !== j) count++;
  }
}
console.log(count === 2 ? "Prime Number" : "Not a Prime Number"); // Output: "Not a Prime Number"
```

## 🛠️ Usage

1. Clone this repository
2. Run the JavaScript files using Node.js
3. Modify the input values as needed

## 📝 Notes

- All operations are optimized for efficiency
- Each function includes edge case handling
- Time complexity is mentioned where relevant

## 🤝 Contributing

Feel free to contribute by:

1. Forking the repository
2. Creating your feature branch
3. Committing your changes
4. Pushing to the branch
5. Creating a new Pull Request
