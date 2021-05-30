// Pivot helper function
function pivot(arr, start, end) {
  if (!arr.length) {
    return;
  }
  const pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }

  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];

  return swapIdx;
}

// Quick sort implementation
function quickSort(arr, left = 0, right = arr.length - 1) {

  if (left < right) {

    let pivotIdx = pivot(arr, left, right);

    // left
    quickSort(arr, left, pivotIdx - 1);

    // right
    quickSort(arr, pivotIdx + 1, right);
  }

  return arr;

}

quickSort([4, 8, 2, 1, 5, 7, 6, 3]);
quickSort([100, -3, 4, 8, 2, 1, 5, 7, 6, 3]);