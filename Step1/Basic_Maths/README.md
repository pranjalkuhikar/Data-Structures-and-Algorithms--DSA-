# JavaScript Basic Number Operations

This repository contains various JavaScript code snippets demonstrating fundamental operations and checks on numbers. Each section includes the code, the problem it solves, and its corresponding output.

---

## 1. Count Digits in a Number

**Problem:** Counts the number of digits in a given integer.

**Code:**

```javascript
let n = 12345;
let count = 0;
while (n != 0) {
  let lastDigit = n % 10;
  count++;
  n = Math.floor(n / 10);
}
console.log(count);
```
