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

const getValues = (quantity, item) => {
  if (item === 0) {
    return [quantity[0], quantity[1], ++quantity[2]];
  }

  return item > 0
    ? [++quantity[0], quantity[1], quantity[2]]
    : [quantity[0], ++quantity[1], quantity[2]];
};

const getRatios = (quantities, arrSize) =>
  quantities.map((quantity) => (quantity / arrSize).toFixed(6));

const showRatios = (quantities, arrSize) => {
  const [positiveRatio, negativeRatio, zeroRatio] = getRatios(
    quantities,
    arrSize
  );

  console.log(`${positiveRatio}\n${negativeRatio}\n${zeroRatio}`);
};

const plusMinus = (arr) => {
  const values = arr.reduce(getValues, [0, 0, 0]);

  return showRatios(values, arr.length);
};

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
