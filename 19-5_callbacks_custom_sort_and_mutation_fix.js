/*
  Problem 1: Custom Sort — Descending Numbers
  sortDescending(nums) — sort an array of numbers from largest to
  smallest, using a comparator callback passed to .sort(). Return a
  NEW array — don't mutate the original nums array.

  Input:
    [1, 10, 2, 25, 3]

  Output:
    [25, 10, 3, 2, 1]
*/

let sortDescending = (nums) => {
    let sortedNums = [...nums].sort((a, b) => b - a);
    return sortedNums;
}

const nums = [1, 10, 2, 25, 3];

console.log(sortDescending(nums));