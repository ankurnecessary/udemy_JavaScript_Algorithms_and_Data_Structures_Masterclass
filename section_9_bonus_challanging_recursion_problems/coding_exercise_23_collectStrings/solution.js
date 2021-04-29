/*
Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string
*/

function collectStrings(obj) {

    if (obj === null || Array.isArray(obj))
        return;

    let arr = [];

    for (const keyName of Object.keys(obj)) {
        if (typeof obj[keyName] === 'string') {
            arr.push(obj[keyName]);
        } else {
            arr = arr.concat(collectStrings(obj[keyName]));
        }
    }

    return arr;

}

var obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj)
// ["foo", "bar", "baz"])
