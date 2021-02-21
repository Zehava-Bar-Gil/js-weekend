/*------------------------------------------------------------------------------------------
Given an array of ones and zeroes, convert the equivalent binary value to an integer.
Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
----------------------------------------------------------------------------------------------*/

'use strict';

const binaryToNum = (array) => {
    let binary = 0;
    array.forEach(num => {
        binary *= 10;
        binary += num;
    });
    return parseInt(binary, 2);
}

console.log(binaryToNum([0, 0, 0, 1]));
console.log(binaryToNum([1, 1, 1, 1]));
console.log(binaryToNum([1, 0, 1, 1]));
console.log(binaryToNum([0, 1, 1, 0]));
console.log(binaryToNum([0, 1, 1, 0, 1, 0]));