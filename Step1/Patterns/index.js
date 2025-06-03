let n = 5;

// Question 1: Create a square pattern of asterisks
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// Question 2: Create a right triangle pattern of asterisks
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// Question 3: Create an incremental number triangle pattern
// for (let i = 0; i < n; i++) {
//   let count = 1;
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write(`${count++}`);
//   }
//   console.log();
// }

// Question 4: Create a same number triangle pattern
// let count = 1;
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write(`${count}`);
//   }
//   console.log();
//   count++;
// }

// Question 5: Create an inverted star triangle pattern
// for (let i = 0; i < n; i++) {
//   for (let j = i; j < n; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// Question 6: Create a decremental number triangle pattern
// for (let i = 0; i < n; i++) {
//   let count = 1;
//   for (let j = i; j < n; j++) {
//     process.stdout.write(`${count++}`);
//   }
//   console.log();
// }

// Question 7: Create a pyramid pattern of asterisks
// for (let i = 0; i < n; i++) {
//   for (let j = i; j < n; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = 0; k <= 2 * i; k++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// Question 8: Create an inverted pyramid pattern of asterisks
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = 2 * i; k <= 2 * n - 2; k++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// Question 9: Create a diamond pattern of asterisks
// for (let i = 0; i < n; i++) {
//   for (let j = i; j < n; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = 0; k <= 2 * i; k++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = 2 * i; k <= 2 * n - 2; k++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// Question 10: Create an arrow pattern of asterisks
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }
// for (let i = 1; i < n; i++) {
//   for (let j = i; j < n; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// Question 11: Create a binary pattern (alternating 1s and 0s)
// for (let i = 0; i < n; i++) {
//   let count = i % 2 === 0 ? 1 : 0;
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write(`${count}`);
//     count = 1 - count;
//   }
//   console.log();
// }

// Question 12: Create a palindrome number pattern
// for (let i = 1; i < n; i++) {
//   let count = 1;
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(`${count++}`);
//   }
//   for (let k = 2; k < 2 * (n - i); k++) {
//     process.stdout.write(" ");
//   }
//   count = i;
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(`${count--}`);
//   }
//   console.log();
// }

// Question 13: Create a continuous number pattern
// let count = 1;
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write(`${count++} `);
//   }
//   console.log();
// }

// Question 14: Create an alphabet triangle pattern
// for (let i = 0; i < n; i++) {
//   let count = 65;
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write(`${String.fromCharCode(count++)} `);
//   }
//   console.log();
// }

// Question 15: Create an inverted alphabet triangle pattern
// for (let i = 0; i < n; i++) {
//   let count = 65;
//   for (let j = i; j < n; j++) {
//     process.stdout.write(`${String.fromCharCode(count++)} `);
//   }
//   console.log();
// }

// Question 16: Create a same letter triangle pattern
// let count = 65;
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write(`${String.fromCharCode(count)} `);
//   }
//   count++;
//   console.log();
// }

// Question 17: Create an alphabet pyramid pattern
// let count = 65;
// for (let i = 0; i < n; i++) {
//   for (let j = i; j < n; j++) {
//     process.stdout.write(" ");
//   }
//   for (let j = 0; j <= 2 * i; j++) {
//     process.stdout.write(
//       `${String.fromCharCode(j <= i ? count + j : count + (2 * i - j))}`
//     );
//   }
//   count = 65;
//   console.log();
// }

// Question 18: Create a descending alphabet pattern
// for (let i = 0; i < n; i++) {
//   let count = 69 - i;
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write(`${String.fromCharCode(count + j)} `);
//   }
//   console.log();
// }

// Question 19: Create a butterfly pattern of asterisks
// for (let i = 0; i < n; i++) {
//   for (let j = i; j < n; j++) {
//     process.stdout.write("*");
//   }
//   for (let k = 0; k <= 2 * i; k++) {
//     process.stdout.write(" ");
//   }
//   for (let j = i; j < n; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write("*");
//   }
//   for (let k = 2 * i; k <= 2 * n - 2; k++) {
//     process.stdout.write(" ");
//   }
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// Question 20: Create a double butterfly pattern of asterisks
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write("*");
//   }
//   for (let k = 2 * i; k <= 2 * n - 2; k++) {
//     process.stdout.write(" ");
//   }
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }
// for (let i = 0; i < n; i++) {
//   for (let j = i; j < n; j++) {
//     process.stdout.write("*");
//   }
//   for (let k = 0; k <= 2 * i; k++) {
//     process.stdout.write(" ");
//   }
//   for (let j = i; j < n; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// Question 21: Create a hollow square pattern with numbers
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
//       process.stdout.write("3 ");
//     } else if (i === 1 || i === n - 2 || j === 1 || j === n - 2) {
//       process.stdout.write("2 ");
//     } else {
//       process.stdout.write("1 ");
//     }
//   }
//   console.log();
// }
