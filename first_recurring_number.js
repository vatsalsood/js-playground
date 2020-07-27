
// Inputs are always arrays
// Output: Returns the 1st number that is recurring
// Brute force method: Store every number is a array/hash table, For every element of the array check the hash table/array and see if its already there.
// If it is, return that number.
const recurringNumber = recurringArray => {
    let counter = 0;
    let testArray = [];
    for (let i = 0; i < recurringArray.length; i++) {
        let numberObject = {};
        for (let j = 0; j < testArray.length; j++) {
            if (typeof testArray[j].number !== 'undefined') {
                if (testArray[j].number == recurringArray[i]) {
                    return recurringArray[i];
                }
            }
        }
        numberObject.number = recurringArray[i];
        numberObject.counter = counter;
        testArray.push(numberObject);
    }
};

const recurringNumber2 = recurringArray => {
    let testArray = [];
    for (let i = 0; i < recurringArray.length; i++) {
        if (testArray.length > 0) {
            for (let j = 0; j < testArray.length; j++) {
                if (testArray[j] === recurringArray[i]) {
                    return recurringArray[i];
                } else {
                    testArray.push(recurringArray[i]);
                }
            }
        } else {
            testArray.push(recurringArray[i]);
        }
    }
}

const array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const array3 = [2, 3, 4, 5];
console.log(recurringNumber2(array2));