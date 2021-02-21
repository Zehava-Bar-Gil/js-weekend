/*------------------------------------------------------------------------------------------
Complete the findNextSquare method that finds the next integral perfect square after the one
passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is
also an integer.
If the parameter is itself not a perfect square then -1 should be returned. You may assume the
parameter is positive.
----------------------------------------------------------------------------------------------*/

'use strict';

const findNextSquare = (n) => {
    const sqrt = Math.sqrt(n);
    return sqrt % 1 === 0? (sqrt + 1) ** 2 : -1;
};

console.log(findNextSquare(121));
console.log(findNextSquare(625)); 
console.log(findNextSquare(114));