/*------------------------------------------------------------------------------------------
There is an array with some numbers. All numbers are equal except for one. Try to find it!
--------------------------------------------------------------------------------------------*/

'use strict';

const findUniq = (array) => {
    const sortedArray = array.sort((a, b) => a - b);
    return sortedArray[0] === sortedArray[1] ? sortedArray[array.length - 1] : sortedArray[0];
};

console.log(findUniq(([ 1, 1, 1, 2, 1, 1 ])));
console.log(findUniq(([ 0, 0, 0.55, 0, 0 ])));
console.log(findUniq(([ 2, 2, 2, 4, 2, 2 , 2])));
console.log(findUniq(([ 3, 3, 6, 3, 3])));