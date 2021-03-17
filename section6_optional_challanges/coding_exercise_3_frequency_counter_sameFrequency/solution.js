/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

function sameFrequency(digit1, digit2) {

  if (digit1.length !== digit2.length) return false;

  digit1 = digit1.toString();
  digit2 = digit2.toString();
  const obj = {};

  for (let i = 0; i < digit1.length; i++) {
    obj[digit1[i]] ? obj[digit1[i]]++ : obj[digit1[i]] = 1;
  }

  for (let j = 0; j < digit2.length; j++) {
    if (obj[digit2[j]]) {
      obj[digit2[j]]--;
    } else {
      return false;
    }
  }

  return true;

}
