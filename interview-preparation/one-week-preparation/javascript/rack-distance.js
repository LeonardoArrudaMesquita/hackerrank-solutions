function solution(A) {
  const sortedRacks = A.sort((a, b) => a - b);

  console.log(sortedRacks);

  return sortedRacks.reduce((prev, curr, index) => {
    const racksDistance = Math.abs(curr - A[index + 1]);
    if (racksDistance > prev) {
      return Math.trunc(racksDistance / 2);
    }

    return prev;
  }, 0);
}

const arr = [10, 0, 8, 2, -1, 12, 11, 3];
console.log(solution(arr));
