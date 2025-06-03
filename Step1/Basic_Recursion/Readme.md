# Basic Recursion Problems in JavaScript

A collection of fundamental recursive programming problems implemented in JavaScript.

## 📑 Table of Contents

1. [Print Name N Times](#1-print-name-n-times)
2. [Print Numbers N to 1](#2-print-numbers-n-to-1)
3. [Print Numbers 1 to N](#3-print-numbers-1-to-n)
4. [Sum of First N Numbers](#4-sum-of-first-n-numbers)
5. [Factorial of N](#5-factorial-of-n)
6. [Reverse Array](#6-reverse-array)
7. [Palindrome Check](#7-palindrome-check)
8. [Nth Fibonacci Number](#8-nth-fibonacci-number)
9. [Fibonacci Series](#9-fibonacci-series)

## 🔄 Problems & Solutions

### 1. Print Name N Times

Print a name N times using recursion.

```javascript
function printName(n) {
  if (n === 0) return;
  console.log("Pranjal");
  printName(n - 1);
}
printName(5);
```

**Output:**

```
Pranjal
Pranjal
Pranjal
Pranjal
Pranjal
```

### 2. Print Numbers N to 1

Print numbers from N to 1 in descending order.

```javascript
function printNumber(n) {
  if (n === 0) return;
  console.log(n);
  printNumber(n - 1);
}
printNumber(5);
```

**Output:**

```
5
4
3
2
1
```

### 3. Print Numbers 1 to N

Print numbers from 1 to N in ascending order.

```javascript
function printNumber(n) {
  if (n === 0) return;
  printNumber(n - 1);
  console.log(n);
}
printNumber(5);
```

**Output:**

```
1
2
3
4
5
```

### 4. Sum of First N Numbers

Calculate sum of first N natural numbers.

```javascript
function sumOfNumber(n) {
  if (n === 0) return 0;
  return n + sumOfNumber(n - 1);
}
console.log(sumOfNumber(5));
```

**Output:**

```
15
```

### 5. Factorial of N

Calculate factorial of a number N.

```javascript
function factorial(n) {
  if (n === 1) return n;
  return n * factorial(n - 1);
}
console.log(factorial(5));
```

**Output:**

```
120
```

### 6. Reverse Array

Reverse an array using recursion.

```javascript
function reverseArray(i, arr) {
  if (i >= arr.length / 2) return arr;
  [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  return reverseArray(i + 1, arr);
}
console.log(reverseArray(0, [1, 2, 3, 4, 5]));
```

**Output:**

```
[5, 4, 3, 2, 1]
```

### 7. Palindrome Check

Check if a string is palindrome.

```javascript
function checkPalindrome(i, str) {
  if (i >= str.length / 2) return true;
  if (str[i] !== str[str.length - 1 - i]) return false;
  return checkPalindrome(i + 1, str);
}
console.log(checkPalindrome(0, "ABCDCBA"));
```

**Output:**

```
true
```

### 8. Nth Fibonacci Number

Find the Nth number in Fibonacci series.

```javascript
function fibonacci(n) {
  if (n === 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6));
```

**Output:**

```
8
```

### 9. Fibonacci Series

Print Fibonacci series up to N terms.

```javascript
function fibonacci(n) {
  if (n === 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
for (let i = 0; i < 6; i++) {
  console.log(fibonacci(i));
}
```

**Output:**

```
0
1
1
2
3
5
```

## 🛠️ Usage

1. Clone this repository
2. Open in VS Code
3. Run individual functions:

```bash
node index.js
```

## 📝 Notes

- All solutions use recursion
- Time complexity varies for each solution
- Space complexity depends on recursion depth

## 🤝 Contributing

Feel free to contribute by:

1. Forking the repository
2. Creating your feature branch
3. Committing your changes
4. Creating a pull request
