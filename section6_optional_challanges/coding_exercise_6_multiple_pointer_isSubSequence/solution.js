/*
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/

/*function isSubsequence(subStr, str) {

  let subStrLen = subStr.length;
  let lastOccurrenceIdx = -1;


  for (let i = 0; i < subStr.length; i++) {
    let charFoundAt = str.indexOf(subStr[i]);
    if (charFoundAt !== -1 && subStrLen > 0 && charFoundAt > lastOccurrenceIdx) {
      lastOccurrenceIdx = i;
      str = str.replace(subStr[i], '@');
      subStrLen--;
    } else {
      return false;
    }
  }

  return true;

}*/

// From udemy
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
