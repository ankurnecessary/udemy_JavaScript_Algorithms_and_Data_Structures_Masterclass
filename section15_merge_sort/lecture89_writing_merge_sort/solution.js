/*
  
  Merging sorted arrays to output a sorted array

  1. If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array

  2. If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array

  3. Once we exhaust one array, push in all remaining values from the other array

*/
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

/*
  Merge sort
  ============
  1. Break up the array into halves until you have arrays that are empty or have one element
  2. Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
  3. Once the array has been merged back together, return the merged (and sorted!) array
*/

function mergeSort(arr) {
  if(arr.length <= 1) return arr;
  const middleIdx = arr.length/2;
  const leftArr = mergeSort(arr.slice(0,middleIdx));
  const rightArr = mergeSort(arr.slice(middleIdx));
  return merge(leftArr, rightArr);
}

mergeSort([10, 24, 76, 73]);
mergeSort([10, 24, 76, 73, 1, 3, 15, -1]);
mergeSort([10]);