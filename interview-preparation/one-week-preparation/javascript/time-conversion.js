"use strict";

const fs = require("fs");

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  const period = s.slice(s.length - 2, s.length);
  const [hours, minutes, seconds] = s.split(/[:|PM|AM]+/);

  const time24format = `${hours}:${minutes}:${seconds}`;

  if (period === "AM") {
    return hours === "12" ? `00:${minutes}:${seconds}` : time24format;
  }

  const parsedHours = Number(hours) + 12;
  return hours === "12" ? time24format : `${parsedHours}:${minutes}:${seconds}`;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
