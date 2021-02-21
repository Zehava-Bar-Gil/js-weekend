/*------------------------------------------------------------------------------------------
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
longest possible, containing distinct letters,
each taken only once - coming from s1 or s2.
--------------------------------------------------------------------------------------------*/

'use strict';

const longestWord = (s1, s2) => {
    let result = [];
    const addStr = (str) => {
      for (const ch of str) {
        if (!result.includes(ch)) {
          result.push(ch);
        }
      }
    }
    addStr(s1);
    addStr(s2);
    return result.sort().join("");
  }

let a = "xyaabbbccccdefww";
let b = "xxxxyyyyabklmopq";
console.log(longestWord(a, b)); 