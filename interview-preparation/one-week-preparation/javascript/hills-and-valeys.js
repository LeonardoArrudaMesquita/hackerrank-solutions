// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  return calculateHillsAndValleys(A);
}

function calculateHillsAndValleys(A) {
  return A.reduce((prev, curr, index, arr) => {
    if (index > 0) {
      if (
        arr[index - 1] < arr[index] ||
        arr[index - 1] > curr[index] ||
        (curr < 0 && arr[index] === arr[index - 1])
      ) {
        return ++prev;
      }
    }

    return prev;
  }, 0);
}

const arr = [2, 2, 3, 4, 3, 3, 4, 2, 1, 1, 2, 5];
// const arr = [-3, -3];

console.log(solution(arr));
