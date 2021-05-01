/*

Bubble Sort Pseudo code
-----------------------
1. Start looping from with a variable called i the end of the array towards the beginning
2. Start an inner loop with a variable called j from the beginning until i - 1
3. If arr[j] is greater than arr[j+1], swap those two values!
4. Return the sorted array

*/

function bubbleSort(arr) {

  let noSwaps;
  
  for (let i = arr.length; i > 0; i--) {
    
    noSwaps = true;
    
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    
    if (noSwaps) break;

  }

  return arr;

}

bubbleSort([10, 5, 3, 4, 1, 2]);