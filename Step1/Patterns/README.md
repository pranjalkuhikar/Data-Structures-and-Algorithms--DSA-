# Pattern Printing Programs

A comprehensive collection of pattern printing programs implemented in JavaScript. This showcase demonstrates various pattern printing techniques using loops and basic programming concepts.

## 🎨 Pattern Collection

### 1. Square Pattern

```javascript
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    process.stdout.write("*");
  }
  console.log();
}
```

Output:

```
*****
*****
*****
*****
*****
```

### 2. Right Triangle Pattern

```javascript
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log();
}
```

Output:

```
*
**
***
****
*****
```

### 3. Incremental Number Triangle

```javascript
for (let i = 0; i < n; i++) {
  let count = 1;
  for (let j = 0; j <= i; j++) {
    process.stdout.write(`${count++}`);
  }
  console.log();
}
```

Output:

```
1
12
123
1234
12345
```

### 4. Same Number Triangle

```javascript
let count = 1;
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(`${count}`);
  }
  console.log();
  count++;
}
```

Output:

```
1
22
333
4444
55555
```

### 5. Inverted Star Triangle

```javascript
for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    process.stdout.write("*");
  }
  console.log();
}
```

Output:

```
*****
****
***
**
*
```

### 6. Decremental Number Triangle

```javascript
for (let i = 0; i < n; i++) {
  let count = 1;
  for (let j = i; j < n; j++) {
    process.stdout.write(`${count++}`);
  }
  console.log();
}
```

Output:

```
12345
1234
123
12
1
```

### 7. Pyramid Pattern

```javascript
for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    process.stdout.write(" ");
  }
  for (let k = 0; k <= 2 * i; k++) {
    process.stdout.write("*");
  }
  console.log();
}
```

Output:

```
    *
   ***
  *****
 *******
*********
```

### 8. Inverted Pyramid Pattern

```javascript
for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    process.stdout.write(" ");
  }
  for (let k = 2 * i; k <= 2 * n - 2; k++) {
    process.stdout.write("*");
  }
  console.log();
}
```

Output:

```
*********
 *******
  *****
   ***
    *
```

### 9. Diamond Pattern

```javascript
for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    process.stdout.write(" ");
  }
  for (let k = 0; k <= 2 * i; k++) {
    process.stdout.write("*");
  }
  console.log();
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(" ");
  }
  for (let k = 2 * i; k <= 2 * n - 2; k++) {
    process.stdout.write("*");
  }
  console.log();
}
```

Output:

```
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

### 10. Arrow Pattern

```javascript
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log();
}
for (let i = 1; i < n; i++) {
  for (let j = i; j < n; j++) {
    process.stdout.write("*");
  }
  console.log();
}
```

Output:

```
*
**
***
****
*****
****
***
**
*
```

### 11. Binary Pattern

```javascript
for (let i = 0; i < n; i++) {
  let count = i % 2 === 0 ? 1 : 0;
  for (let j = 0; j <= i; j++) {
    process.stdout.write(`${count}`);
    count = 1 - count;
  }
  console.log();
}
```

Output:

```
1
01
101
0101
10101
```

### 12. Palindrome Pattern

```javascript
for (let i = 1; i < n; i++) {
  let count = 1;
  for (let j = 1; j <= i; j++) {
    process.stdout.write(`${count++}`);
  }
  for (let k = 2; k < 2 * (n - i); k++) {
    process.stdout.write(" ");
  }
  count = i;
  for (let j = 1; j <= i; j++) {
    process.stdout.write(`${count--}`);
  }
  console.log();
}
```

Output:

```
1   1
12 21
12321
```

### 13. Continuous Number Pattern

```javascript
let count = 1;
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(`${count++} `);
  }
  console.log();
}
```

Output:

```
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
```

### 14. Alphabet Triangle

```javascript
for (let i = 0; i < n; i++) {
  let count = 65;
  for (let j = 0; j <= i; j++) {
    process.stdout.write(`${String.fromCharCode(count++)} `);
  }
  console.log();
}
```

Output:

```
A
A B
A B C
A B C D
A B C D E
```

### 15. Inverted Alphabet Triangle

```javascript
for (let i = 0; i < n; i++) {
  let count = 65;
  for (let j = i; j < n; j++) {
    process.stdout.write(`${String.fromCharCode(count++)} `);
  }
  console.log();
}
```

Output:

```
A B C D E
A B C D
A B C
A B
A
```

### 16. Same Letter Triangle

```javascript
let count = 65;
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(`${String.fromCharCode(count)} `);
  }
  count++;
  console.log();
}
```

Output:

```
A
B B
C C C
D D D D
E E E E E
```

### 17. Alphabet Pyramid

```javascript
let count = 65;
for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    process.stdout.write(" ");
  }
  for (let j = 0; j <= 2 * i; j++) {
    process.stdout.write(
      `${String.fromCharCode(j <= i ? count + j : count + (2 * i - j))}`
    );
  }
  count = 65;
  console.log();
}
```

Output:

```
    A
   ABA
  ABCBA
 ABCDCBA
ABCDEDCBA
```

### 18. Descending Alphabet Pattern

```javascript
for (let i = 0; i < n; i++) {
  let count = 69 - i;
  for (let j = 0; j <= i; j++) {
    process.stdout.write(`${String.fromCharCode(count + j)} `);
  }
  console.log();
}
```

Output:

```
E
D E
C D E
B C D E
A B C D E
```

### 19. Butterfly Pattern

```javascript
for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    process.stdout.write("*");
  }
  for (let k = 0; k <= 2 * i; k++) {
    process.stdout.write(" ");
  }
  for (let j = i; j < n; j++) {
    process.stdout.write("*");
  }
  console.log();
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write("*");
  }
  for (let k = 2 * i; k <= 2 * n - 2; k++) {
    process.stdout.write(" ");
  }
  for (let j = 0; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log();
}
```

Output:

```
***** *****
****   ****
***     ***
**       **
*         *
*         *
**       **
***     ***
****   ****
***** *****
```

### 20. Double Butterfly Pattern

```javascript
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write("*");
  }
  for (let k = 2 * i; k <= 2 * n - 2; k++) {
    process.stdout.write(" ");
  }
  for (let j = 0; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log();
}
for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    process.stdout.write("*");
  }
  for (let k = 0; k <= 2 * i; k++) {
    process.stdout.write(" ");
  }
  for (let j = i; j < n; j++) {
    process.stdout.write("*");
  }
  console.log();
}
```

Output:

```
*         *
**       **
***     ***
****   ****
***** *****
***** *****
****   ****
***     ***
**       **
*         *
```

### 21. Hollow Square Pattern

```javascript
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
      process.stdout.write("3 ");
    } else if (i === 1 || i === n - 2 || j === 1 || j === n - 2) {
      process.stdout.write("2 ");
    } else {
      process.stdout.write("1 ");
    }
  }
  console.log();
}
```

Output:

```
3 3 3 3 3
3 2 2 2 3
3 2 1 2 3
3 2 2 2 3
3 3 3 3 3
```

## 🚀 How to Run

1. Set the value of `n` (size of pattern)
2. Uncomment the pattern you want to run
3. Execute the code using Node.js

## 🔍 Key Concepts Used

- Nested Loops
- Pattern Logic
- ASCII Character Manipulation
- String Concatenation
- Mathematical Operations
- Conditional Statements

## 📝 Notes

- All patterns are customizable by changing the value of `n`
- Each pattern demonstrates different programming concepts
- Patterns can be combined to create more complex designs
