/*
https://cs.slides.com/colt_steele/problem-solving-patterns#/28/0/1
Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array(indices can mismatch). The frequency of values must be the same.

same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)

O(n^2)
*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let squaredValueIdx;

  return arr1.every((item) => {
    squaredValueIdx = arr2.indexOf(item ** 2);
    if (squaredValueIdx !== -1) {
      arr2.splice(squaredValueIdx, 1);
      return true;
    }
    else {
      return false;
    }
  });
}

same([1, 2, 3], [4, 1, 9]);