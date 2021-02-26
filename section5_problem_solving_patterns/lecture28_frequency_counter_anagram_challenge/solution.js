/*
https://cs.slides.com/colt_steele/problem-solving-patterns#/31
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true

O(3n) = O(n)

*/

function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length)
    return false;

  const arr1 = [...str1];
  const arr2 = [...str2];

  const obj1 = {};
  const obj2 = {};

  for (let i = 0; i < arr1.length; i++) {
    obj1[arr1[i]] = (obj1[arr1[i]] || 0) + 1;
  }

  for (let j = 0; j < arr2.length; j++) {
    obj2[arr2[j]] = (obj2[arr2[j]] || 0) + 1;
  }

  for (let key in obj1) {
    if (!(key in obj2))
      return false;

    if (obj1[key] !== obj2[key])
      return false;
  }

  return true;
}

validAnagram('aaz', 'zza')
