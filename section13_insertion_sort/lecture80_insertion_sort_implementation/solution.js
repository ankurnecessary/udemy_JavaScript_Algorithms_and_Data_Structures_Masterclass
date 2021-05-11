/*

    1. Start by picking the second element in the array
    2. Now compare the second element with the one before it and swap if necessary.
    3. Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
    4.Repeat until the array is sorted.

    insertionSort([3, 2, 1]);
    insertionSort([2, -1, 3, 9, 5, 8, 1.1, 4.5])
*/

/*function insertionSort(arr) {

    let nextEle, sortedArr;

    for (let i = 1; i < arr.length; i++) {
        nextEle = arr[i];
        sortedArr = arr.slice(0, i);
        for (let j = 0; j < i; j++) {
            if (nextEle < sortedArr[j]) {
                sortedArr.splice(j, 0, nextEle);
            } else {
                if(sortedArr[j+1] === undefined){
                    sortedArr.splice(j + 1, 0, nextEle);
                }
            }
            if(sortedArr.length === arr.length) break;
        }
        arr.splice(0, i+1, ...sortedArr);
        sortedArr = [];
    }

    return arr;

}*/

function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }

    return arr;
}
