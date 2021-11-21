const matrix = [
  [-10, 3, 0, 5, -4],
  [2, -1, 0, 2, -8],
  [9, -2, -5, 6, 0],
  [9, -7, 4, 8, -2],
  [3, 7, 8, -5, 0],
];

// NORMAL RESOLUTION
const getDifferenceDiagonalMatrix = (matrix) => {
  let firstDiagonal = 0;
  let secondDiagonal = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i === j) {
        firstDiagonal += matrix[i][j];
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i + j === matrix.length - 1) {
        secondDiagonal += matrix[i][j];
      }
    }
  }

  return Math.abs(firstDiagonal - secondDiagonal);
};

// ES6 Resolution
const getDifferenceDiagonalMatrixES6 = (matrix) => {
  const firstDiagonalValue = matrix
    .map((arr, index) => arr[index])
    .reduce((prev, curr) => prev + curr);

  const secondDiagonalValue = matrix
    .map((arr, index) => arr[arr.length - index - 1])
    .reduce((prev, curr) => prev + curr);

  return Math.abs(firstDiagonalValue - secondDiagonalValue);
};

console.log(getDifferenceDiagonalMatrixES6(matrix));
console.log(getDifferenceDiagonalMatrix(matrix));
