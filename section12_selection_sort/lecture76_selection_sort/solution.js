
/*
    Selection Sort
    ==============
    1. Store the first element as the smallest value you've seen so far.
    2. Compare this item to the next item in the array until you find a smaller number.
    3. If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
    4. If the "minimum" is not the value (index) you initially began with, swap the two values.
    5. Repeat this with the next element until the array is sorted.

 */

function selectionSortArr(arr) {

  if (arr.length < 2) return arr;

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (lowest !== i) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
  }

  return arr;

}