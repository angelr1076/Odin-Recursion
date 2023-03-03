// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. Using an example input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].
function fibs(n) {
  let fibArray = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      fibArray.push(0);
    } else if (i === 1) {
      fibArray.push(1);
    } else {
      let lastFib = fibArray[fibArray.length - 1];
      let secondLastFib = fibArray[fibArray.length - 2];
      fibArray.push(lastFib + secondLastFib);
    }
  }

  return fibArray;
}

// let fibsEight = fibs(8);
// console.log(fibsEight);

// Now write another method fibsRec which solves the same problem recursively. This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).
// @ts-check
function fibRecursive(n) {
  debugger;
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    var prev = fibRecursive(n - 1);
    var current = prev[prev.length - 1] + prev[prev.length - 2];
    return prev.concat(current);
  }
}

let fibEight = fibRecursive(8);
// let fibZero = fibRecursive(-3);
console.log(fibEight);
