/*------------------------------------------------------------------------------------------
Given a string of words, return the longest word[s].
String will never be empty and you do not need to account for different data types.
--------------------------------------------------------------------------------------------*/

'use strict';

const longestWordLen = (str) => {
    return str.split(" ").reduce((longest, word) => word.length > longest? word.length : longest, 0);
};

console.log(longestWordLen("I just call to say"));
console.log(longestWordLen("I will survive"));
console.log(longestWordLen("Feeling good"));