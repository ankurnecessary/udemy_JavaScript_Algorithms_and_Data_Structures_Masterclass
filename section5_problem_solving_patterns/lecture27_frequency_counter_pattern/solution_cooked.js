/*
https://cs.slides.com/colt_steele/problem-solving-patterns#/28/0/1
Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array(indices can mismatch). The frequency of values must be the same.

same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)

O(n)
*/

function same(arr1, arr2) {

  if (arr1.length !== arr2.length) return false;

  var obj1 = {};
  for (let i = 0; i < arr1.length; i++) {
    obj1[arr1[i]] = (obj1[arr1[i]] || 0) + 1;
  }

  var obj2 = {};
  for (let j = 0; j < arr2.length; j++) {
    obj2[arr2[j]] = (obj2[arr2[j]] || 0) + 1;
  }

  for (let key in obj1) {
    if (!((key ** 2) in obj2)) return false;
    if (obj1[key] !== obj2[key ** 2]) return false;
  }

  return true;

}
