/*
  Write a function called <strong>linearSearch</strong> which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

  O(n)

 */

function linearSearch(arr, val) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === val) {
      return i;
    }
  }
  return -1;
}