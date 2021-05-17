/*
  Merging sorted arrays to output a sorted array

  1. If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
  
  2. If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array

  3. Once we exhaust one array, push in all remaining values from the other array

 */

// Way 1 - Destructive for arr1 and arr2
function merge(arr1, arr2) {

  let results = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      results.push(arr1.shift());
    } else {
      results.push(arr2.shift());
    }
  }

  if (arr1.length) {
    results = [...results, ...arr1]
  }

  if (arr2.length) {
    results = [...results, ...arr2]
  }

  return results;

}

// Way2 - Non-destructive
function merge(arr1, arr2) {

  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;

}

merge([], [2, 2, 14, 99, 100]);
// merge([2, 10, 50], [2, 2, 14, 99, 100]);
// merge([1,10, 50],[2,14,99,100]);
// merge([1,10, 50],[2,14,99]);
// merge([1],[2]);
// merge([1, 200], [2, 3]);
