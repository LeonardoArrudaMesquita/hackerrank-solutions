"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  const sortedArr = arr.sort();

  const minSumValue = sortedArr
    .slice(0, arr.length - 1)
    .reduce((prev, curr) => prev + curr);

  const maxSumValue = sortedArr
    .slice(1, arr.length)
    .reduce((prev, curr) => prev + curr);

  console.log(`${minSumValue} ${maxSumValue}`);
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
