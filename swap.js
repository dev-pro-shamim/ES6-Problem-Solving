let a = 5;
let b = 10;

// Swapping values using a temporary variable
[a, b] = [b, a];

console.log("After swapping:");
console.log("a:", a); // Output: a: 10
console.log("b:", b); // Output: b: 5

let nums = [1, 2, 3, 4, 5];

let [first, ...rest] = nums;

console.log("First element:", first);
console.log("Rest of the elements:", rest);