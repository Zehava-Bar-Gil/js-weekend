/*------------------------------------------------------------------------------------------
The function should take three arguments - operation(string/char), value1(number),
value2(number).
The function should return result of numbers after applying the chosen operation.
--------------------------------------------------------------------------------------------*/

'use strict';

const operation = {
    '+': function(a, b) { return a + b },
    '*': function(a, b) { return a * b },
    '-': function(a, b) { return a - b },
    '/': function(a, b) { return a / b },
};

const basic_op = (operator, value1, value2) => {
    return operation[operator](value1, value2);
};

console.log(basic_op('+', 4, 7));
console.log(basic_op('-', 15, 18));
console.log(basic_op('*', 5, 5));
console.log(basic_op('/', 49, 7));
