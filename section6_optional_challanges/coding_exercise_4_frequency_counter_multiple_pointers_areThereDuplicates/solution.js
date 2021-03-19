/*
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true

Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)

*/

// Way 1
/*function areThereDuplicates(...numbers) {
  const countObj = {};
  for (let i = 0; i < numbers.length; i++) {

    if (countObj[numbers[i]]) {
      return true;
    } else {
      countObj[numbers[i]] = 1;
    }

  }

  return false;
}*/

// Way 2
/*function areThereDuplicates(...args) {

    args.sort((a,b) => a > b);
    
    let j = 0;

    for (let i = 0; i < args.length; i++) {
        j = i + 1;
        if (args[i] === args[j]) {
            return true;
        }
    }

    return false;

}*/

// Way 3
function areThereDuplicates(...args) {
  return !(new Set(args).size === args.length);
}

areThereDuplicates(1, 4, 2)
