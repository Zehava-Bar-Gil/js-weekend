/*------------------------------------------------------------------------------------------
Create a function that returns the sum of the two lowest positive numbers given an array of
minimum 4 positive i ntegers. No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455.
-----------------------------------------------------------------------------------------*/

'use strict';

const sumLowest = (array) => {
    if(typeof array !== 'object')
        return 'Undefined!';
    const sortedArray = array.sort((a, b) => a - b);
    return sortedArray[0] + sortedArray[1];
}

console.log(sumLowest([19, 5, 42, 2, 77]));
console.log(sumLowest([10, 343445353, 3453445, 3453545353453]));
console.log(sumLowest([2 , 44, 66, 400]));
console.log(sumLowest("Zehava"));