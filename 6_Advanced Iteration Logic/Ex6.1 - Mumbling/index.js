/*------------------------------------------------------------------------------------------
This time no story, no theory. The examples below show you how to write function
accum :
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z .
--------------------------------------------------------------------------------------------*/

'use strict';

  
const mumbling = (str) => {
    let result = "";
    let strArr = str.toLowerCase().split("");
    for (let i = 0; i < strArr.length; i++) {
      for (let j = 0; j <= i; j++) {
        (j === 0) ? result += strArr[i].toUpperCase() : result += strArr[i];
      }
      if (i < strArr.length - 1) {
        result += "-";
      }
    }
    return result;
  }
  console.log(mumbling("I am so tired"));