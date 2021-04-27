/*
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

*/

function capitalizeFirst(arr) {

  if (arr.length === 0)
    return;

  let newArr = [];

  let element = arr[0];
  element = element[0].toUpperCase() + element.slice(1);
  newArr.push(element);
  if (capitalizeFirst(arr.slice(1))) {
    newArr = newArr.concat(capitalizeFirst(arr.slice(1)));
  }

  return newArr;

}
