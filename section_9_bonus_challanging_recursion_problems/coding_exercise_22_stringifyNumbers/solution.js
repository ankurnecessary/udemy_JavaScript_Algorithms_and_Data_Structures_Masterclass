/*
Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

*/

function stringifyNumbers(obj) {

  const newObj = {};

  for (let keyName of Object.keys(obj)) {
    if (typeof obj[keyName] === 'number') {
      newObj[keyName] = String(obj[keyName]);
    } else if (Array.isArray(obj[keyName])) {
      newObj[keyName] = obj[keyName];
    } else if (typeof obj[keyName] === 'object') {
      newObj[keyName] = stringifyNumbers(obj[keyName]);
    } else {
      newObj[keyName] = obj[keyName];
    }
  }

  return newObj;

}

/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/