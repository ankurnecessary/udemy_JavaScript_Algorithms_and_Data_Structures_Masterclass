/*

    1. This function accepts a sorted array and a value
    2. Create a left pointer at the start of the array, and a right pointer at the end of the array
    3. While the left pointer comes before the right pointer:
      3.1 Create a pointer in the middle
      3.2 If you find the value you want, return the index
      3.3 If the value is too small, move the left pointer up
      3.4 If the value is too large, move the right pointer down
    4. If you never find the value, return -1

    binarySearch([1,2,3,4,5],2) // 1
    binarySearch([1,2,3,4,5],3) // 2
    binarySearch([1,2,3,4,5],5) // 4
    binarySearch([1,2,3,4,5],6) // -1
    binarySearch([ 5, 6, 10, 13, 14, 18, 30, 34, 35, 37,40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10) // 2
    binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37,40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95) // 16
    binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37,40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100) // -1
*/

function binarySearch(arr, val) {

  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== val && start < end) {

    if (arr[middle] < val) {
      start = middle + 1;
    } else {
      end = middle - 1
    }

    middle = Math.floor((start + end) / 2);

  }

  return arr[middle] !== val ? -1 : middle;

}

binarySearch([2, 4, 5, 9, 11, 14, 15, 19, 21, 25, 28, 30, 50, 52, 60, 63], 63)