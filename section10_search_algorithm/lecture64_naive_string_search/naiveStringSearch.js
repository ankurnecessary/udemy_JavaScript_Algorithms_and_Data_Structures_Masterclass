/**
 * Naive string search
 * -------------------
 * We need to find the number of occurrences of small string in a long string
 * long string - wowomgzomg; small string - omg
 */

/*function naiveStringSearch(longStr, smallStr) {
  let regex = new RegExp(smallStr, 'g');
  return longStr.match(regex);
}*/

/*function naiveStringSearch(longStr, smallStr) {

  let counter = 0;

  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < smallStr.length; j++) {
      if (
        longStr[i + 2] && smallStr[j + 2] &&
        longStr[i] === smallStr[j] &&
        longStr[i + 1] === smallStr[j + 1] &&
        longStr[i + 2] === smallStr[j + 2]
      ) {
        counter++;
      }
    }
  }

  return counter;

}*/

function naiveStringSearch(longStr, smallStr) {

  let counter = 0;

  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < smallStr.length; j++) {
      if (longStr[i + j] !== smallStr[j]) {
        break;
      }
      if (j === smallStr.length - 1) {
        counter++;
      }
    }
    
  }

  return counter;

}

naiveStringSearch('wowomgzomg', 'omg');