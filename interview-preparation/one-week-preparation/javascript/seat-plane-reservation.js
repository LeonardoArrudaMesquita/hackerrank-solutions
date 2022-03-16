// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, S) {
  console.log(getUnreservedSeatsOne(N, S));
  console.log(getUnreservedSeatsTwo(N, S));
}

function getUnreservedSeatsOne(rows, reservedSeats) {
  if (rows === 1 && reservedSeats === "") {
    return 2;
  }

  const splitedReservedSeats = reservedSeats.split(" ");

  return Array(rows)
    .fill()
    .reduce((prev, curr, index) => {
      const filteredColsByRow = splitedReservedSeats
        .filter((seat) => seat.includes(index + 1))
        .map((seat) => seat[1]);

      if (["D", "E"].some((col) => filteredColsByRow.includes(col))) {
        prev -= 1;
      } else {
        if (["B", "C"].some((col) => filteredColsByRow.includes(col))) {
          prev -= 1;
        }
      }

      if (["F", "G"].some((col) => filteredColsByRow.includes(col))) {
        prev -= 1;
      } else {
        if (["H", "J"].some((col) => filteredColsByRow.includes(col))) {
          prev -= 1;
        }
      }

      if (prev <= 0) {
        return 0;
      }

      return prev;
    }, rows * 2);
}

function getUnreservedSeatsTwo(rows, reservedSeats) {
  if (rows === 1 && reservedSeats === "") {
    return 2;
  }

  let availableSeats = 0;
  const splitedReservedSeats = reservedSeats.split(" ");

  for (let index = 1; index <= rows; index++) {
    if (
      !splitedReservedSeats.includes(`${index}B`) &&
      !splitedReservedSeats.includes(`${index}C`) &&
      !splitedReservedSeats.includes(`${index}D`) &&
      !splitedReservedSeats.includes(`${index}E`)
    ) {
      availableSeats += 1;
    }

    if (
      !splitedReservedSeats.includes(`${index}F`) &&
      !splitedReservedSeats.includes(`${index}G`) &&
      !splitedReservedSeats.includes(`${index}H`) &&
      !splitedReservedSeats.includes(`${index}J`)
    ) {
      availableSeats += 1;
    }
  }

  return availableSeats;
}

solution(5, "1A 1B 1C 1D 5K");
