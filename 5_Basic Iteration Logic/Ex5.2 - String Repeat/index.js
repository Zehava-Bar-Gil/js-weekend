/*------------------------------------------------------------------------------------------
Write a function called repeat_str which repeats the given string src exactly count times.
repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
--------------------------------------------------------------------------------------------*/

'use strict';

const strRepeat = (num, str) => {
    let result = "";

    for(let i = 0; i < num; i++){
        result = result.concat(str);
    }

    return result;
};

console.log(strRepeat(3, "I"))
console.log(strRepeat(4, "<3"))
console.log(strRepeat(5, "You"))