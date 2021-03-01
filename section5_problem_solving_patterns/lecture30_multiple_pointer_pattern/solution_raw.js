/*
https://cs.slides.com/colt_steele/problem-solving-patterns#/34

Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined

O(n)
*/

function sumZero(arr) {

  let startIndex = 0;
  let lastIndex = arr.length - 1;

  while (
    (arr[startIndex] + arr[lastIndex]) !== 0 &&
    (arr[startIndex] + arr[lastIndex]) > -1 &&
    startIndex < arr.length - 1
  ) {
    if (lastIndex > startIndex) {
      lastIndex--;
    } else {
      startIndex++;
      lastIndex = arr.length - 1;
    }
  }

  if (arr[startIndex] + arr[lastIndex] === 0) {
    return [arr[startIndex], arr[lastIndex]];
  } else {
    return undefined;
  }

}

// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
// sumZero([-2,0,1,3]) // undefined
// sumZero([1, 2, 3])// undefined
