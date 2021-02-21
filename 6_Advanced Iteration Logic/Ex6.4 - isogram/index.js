/*------------------------------------------------------------------------------------------
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
a function that determines whether a string that contains only letters is an isogram. Assume the
empty string is an isogram. Ignore letter case.
--------------------------------------------------------------------------------------------*/

'use strict';

const isIsogram = (string) => {
    const count = {};

    const arr = string.split("");

    for(let i = 0; i < arr.length; i++) {
        const ch = arr[i].toLowerCase()
        if(count[ch])
            return false;
        else
            count[ch] = 1;
    };

    return true;
};
  
  console.log(isIsogram("Dermatoglyphics"));
  console.log(isIsogram("aba"));
  console.log(isIsogram("moOse"));