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

// Test case 1: n = 0
let result1 = fibs(0);
console.log(result1); // []

// Test case 2: n = 1
result2 = fibs(1);
console.log(result2); // [0]

// Test case 3: n = 2
result3 = fibs(2);
console.log(result3); // [0, 1]

// Test case 4: n = 10
result4 = fibs(10);
console.log(result4); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Test case 5: n = 20
result5 = fibs(20);
console.log(result5); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]

// Now write another method fibsRec which solves the same problem recursively. This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).
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

// Test case 1: n is 0
let result6 = fibRecursive(0);
console.log(result6); // []

// Test case 2: n is 1
result7 = fibRecursive(1);
console.log(result7); // [0]

// Test case 3: n is 2
result8 = fibRecursive(2);
console.log(result8); // [0, 1]

// Test case 4: n is 5
result9 = fibRecursive(5);
console.log(result9); // [0, 1, 1, 2, 3]

// Test case 5: n is 10
result10 = fibRecursive(10);
console.log(result10); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
