function pivot(arr, start, end) {
  if (!arr.length)
    return;
  const pivot = arr[start];
  let swapIdx = start + 1;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
      swapIdx += 1;
    }
    if (i === end) {
      swapIdx -= 1;
    }
  }

  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];

  return swapIdx;
}

// var arr = [10, 3, 23, 5, 14, 6, 100, 45, 69, 58];
// var arr = [9, 4, 8, 2, 1, 5, 7, 6, 3]; // 8
var arr = [4, 8, 2, 1, 5, 7, 6, 3]; // 3
pivot(arr, 0, arr.length - 1);
