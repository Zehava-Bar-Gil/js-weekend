/*------------------------------------------------------------------------------------------
Complete the method/function so that it converts dash/underscore delimited words into camel
casing. The first word within the output should be capitalized only if the original word was
capitalized (known as Upper Camel Case, also often referred to as Pascal case).
--------------------------------------------------------------------------------------------*/

'use strict';

const toCamelCase = (str) => {
    let arrayStr = str.includes("-") ? str.split("-") : str.split("_");
  
    for (let i = 1; i < arrayStr.length; i++) {
      let word = arrayStr[i].split("");
      word[0] = word[0].toUpperCase();
      arrayStr[i] = word.join("");
    }
    return arrayStr.join("");
  
  }
  console.log(toCamelCase("listen_to-your_heart"));