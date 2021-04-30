/*

Bubble Sort Pseudo code
-----------------------
1. Start looping from with a variable called i the end of the array towards the beginning
2. Start an inner loop with a variable called j from the beginning until i - 1
3. If arr[j] is greater than arr[j+1], swap those two values!
4. Return the sorted array

*/

function bubbleSort(arr) {

  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;

}

bubbleSort([10, 5, 3, 4, 1, 2]);