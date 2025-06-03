# JavaScript Hashing Problems

A collection of fundamental hashing problems implemented using JavaScript Map data structure.

## 📑 Table of Contents

1. [Element Frequency Counter](#1-element-frequency-counter)
2. [Most and Least Frequent Elements](#2-most-and-least-frequent-elements)

## 🎯 Problems & Solutions

### 1. Element Frequency Counter

Count occurrences of each element in an array.

```javascript
let arr = [10, 5, 10, 15, 10, 5];
let map = new Map();

// Method 1: Traditional approach
for (let num of arr) {
  if (map.has(num)) {
    map.set(num, map.get(num) + 1);
  } else {
    map.set(num, 1);
  }
}

// Method 2: Concise approach
for (let num of arr) {
  map.set(num, (map.get(num) || 0) + 1);
}
```

**Output:**

```
Map(3) { 10 => 3, 5 => 2, 15 => 1 }
```

### 2. Most and Least Frequent Elements

Find elements with highest and lowest frequencies.

```javascript
let arr = [10, 5, 10, 15, 10, 5];
let map = new Map();

// Count frequencies
for (let num of arr) {
  map.set(num, (map.get(num) || 0) + 1);
}

// Find min/max frequencies
let max = 0,
  min = Infinity;
let maxKey, minKey;

for (let [key, value] of map) {
  if (value > max) {
    max = value;
    maxKey = key;
  }
  if (value < min) {
    min = value;
    minKey = key;
  }
}
```

**Output:**

```
Most frequent: 10 (3 times)
Least frequent: 15 (1 time)
```

## ⚡ Time & Space Complexity

### Element Frequency Counter

- Time Complexity: O(n)
- Space Complexity: O(k) where k is unique elements

### Most/Least Frequent Elements

- Time Complexity: O(n)
- Space Complexity: O(k)

## 🛠️ Usage

1. Clone the repository
2. Open in VS Code
3. Run the code:

```bash
node index.js
```

## 📝 Key Concepts

- **Map Object**: JavaScript's built-in hash table implementation
- **Frequency Counting**: Technique to count occurrences
- **Hash Table**: Data structure for O(1) lookups

## 💡 Tips

1. Use Map over Object for numeric keys
2. Initialize counters with || 0 pattern
3. Use for...of loops for cleaner iteration
4. Handle edge cases (empty arrays, single elements)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📚 Resources

- [MDN Map Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [JavaScript Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
