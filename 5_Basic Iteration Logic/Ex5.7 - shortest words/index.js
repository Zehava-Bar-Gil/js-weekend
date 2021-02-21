/*------------------------------------------------------------------------------------------
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
--------------------------------------------------------------------------------------------*/

'use strict';

const shortesWord = (str) => str.split(" ").map(word => word.length).sort((a, b) => a - b).shift();

console.log(shortesWord("Cookie Monster"));