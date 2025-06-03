let n = 5;

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// for (let i = 0; i < n; i++) {
//   let count = 1;
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write(`${count++}`);
//   }
//   console.log();
// }

// let count = 1;
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write(`${count}`);
//   }
//   console.log();
//   count++;
// }

// for (let i = 0; i < n; i++) {
//   for (let j = i; j < n; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// for (let i = 0; i < n; i++) {
//   let count = 1;
//   for (let j = i; j < n; j++) {
//     process.stdout.write(`${count++}`);
//   }
//   console.log();
// }

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
//   for (let j = 0; j < i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = 2 * i; k <= 2 * n - 2; k++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

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

// for (let i = 0; i < n; i++) {
//   let count = i % 2 === 0 ? 1 : 0;
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write(`${count}`);
//     count = 1 - count;
//   }
//   console.log();
// }

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

let count = 1;
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write(`${count++} `);
  }
  console.log();
}
