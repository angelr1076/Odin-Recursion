// Divide, conquer, combine

function mergeSort(array) {
  let len = array.length;
  // 1. Set base case if the array length is less than or equal to 1, then return since it's already sorted
  if (len === 1) return array;

  if (len > 1) {
    // 2. Divide the array into two parts
    let halveArray = len / 2;

    let leftSide = array.slice(0, halveArray);
    let rightSide = array.slice(halveArray, len);

    // Recursive calls
    mergeSort(leftSide);
    mergeSort(rightSide);
    merge(leftSide, rightSide);
  }
}

function merge(left, right) {
  let leftLen = left.length;
  let rightLen = right.length;

  let i = 0; // counter for left array
  let j = 0; // counter for right array
  let k = 0; // counter for merge array

  console.log(i, leftLen, j, rightLen, k);
  let mergeArray = [];
  //        # Begin swapping values
  while (i <= leftLen && j <= rightLen) {
    if (left[i] < right[j]) {
      mergeArray.push(left[i]);
      i++;
      k++;
    } else {
      mergeArray.push(right[j]);
      j++;
      k++;
    }
  }

  // If there are remaining elements
  for (; i <= leftLen; i++) {
    mergeArray.push(leftLen[i]);
  }

  for (; j <= rightLen; j++) {
    mergeArray.push(rightLen[j]);
  }

  return mergeArray;
}

array = [6, 5, 12, 10, 9, 1, 8];
let callSort = mergeSort(array);
console.log(callSort);
