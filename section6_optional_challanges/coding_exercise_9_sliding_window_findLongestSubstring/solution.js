/*
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6

Time Complexity - O(n)
*/

function findLongestSubstring(str) {
  let end = 0;
  let length = -Infinity;
  let substring = '';

  while (end < str.length) {

    if (substring.indexOf(str[end]) === -1) {
      substring += str[end];
      end++;
      length = Math.max(substring.length, length);
    } else {
      substring = substring.slice(1);
    }

  }

  return length === -Infinity ? 0 : length;
}
