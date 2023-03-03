function mergeSort(array) {
  // If the length of array > 1, it needs to be broken into subarray
  if (array.length > 1) {
    let len = array.length;
    // This is the point where the array is divided into two subarrays
    let halfArray = Math.floor(len / 2);
    // The first half of the data set
    let leftHalf = array.slice(0, halfArray);
    // The second half of the data set
    let rightHalf = array.slice(halfArray);
    // Sort the two halves
    mergeSort(leftHalf);
    mergeSort(rightHalf);
    merge(array, leftHalf, rightHalf);
  }
  return array;
}

function merge(array, left, right) {
  // Set counters to keep track of index positions
  let i = 0;
  let j = 0;
  let k = 0;
  // Begin swapping values
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      array[k] = left[i];
      i++;
    } else {
      array[k] = right[j];
      j++;
    }
    k++;
  }

  // Add remaining values from either left or right into the original array if the two subarrays are uneven in size.
  while (i < left.length) {
    array[k] = left[i];
    i++;
    k++;
  }

  while (j < right.length) {
    array[k] = right[j];
    j++;
    k++;
  }
}

// print the array items as they are merged
function outputList(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

// Test case 1: Sort an array of positive integers
const array1 = [6, 5, 12, 10, 9, 1];
const expected1 = [1, 5, 6, 9, 10, 12];
const result1 = mergeSort(array1);
console.log(JSON.stringify(result1) === JSON.stringify(expected1)); // Output: true

// Test case 2: Sort an array of negative integers
const array2 = [-3, -6, -2, -8, -1];
const expected2 = [-8, -6, -3, -2, -1];
const result2 = mergeSort(array2);
console.log(JSON.stringify(result2) === JSON.stringify(expected2)); // Output: true

// Test case 3: Sort an array of mixed positive and negative integers
const array3 = [5, -3, 0, 10, -1, 8];
const expected3 = [-3, -1, 0, 5, 8, 10];
const result3 = mergeSort(array3);
console.log(JSON.stringify(result3) === JSON.stringify(expected3)); // Output: true

// Test case 4: Sort an already sorted array
const array4 = [1, 2, 3, 4, 5, 6];
const expected4 = [1, 2, 3, 4, 5, 6];
const result4 = mergeSort(array4);
console.log(JSON.stringify(result4) === JSON.stringify(expected4)); // Output: true

// Test case 5: Sort an array with duplicate values
const array5 = [1, 2, 1, 4, 5, 4];
const expected5 = [1, 1, 2, 4, 4, 5];
const result5 = mergeSort(array5);
console.log(JSON.stringify(result5) === JSON.stringify(expected5)); // Output: true

// Test case 6: Sort an empty array
const array6 = [];
const expected6 = [];
const result6 = mergeSort(array6);
console.log(JSON.stringify(result6) === JSON.stringify(expected6)); // Output: true

// Test case 7: Sort an array with a single value
const array7 = [42];
const expected7 = [42];
const result7 = mergeSort(array7);
console.log(JSON.stringify(result7) === JSON.stringify(expected7)); // Output: true
