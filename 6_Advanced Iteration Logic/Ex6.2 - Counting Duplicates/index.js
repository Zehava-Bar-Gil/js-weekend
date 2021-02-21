/*------------------------------------------------------------------------------------------
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and
numeric digits that occur more than once in the input string. The input string can be assumed to
contain only alphabets (both uppercase and lowercase) and numeric digits.
--------------------------------------------------------------------------------------------*/

'use strict';

const countDuplicates = (str) => {
    const count = new Map();
    
    str.split("").forEach(ch => {
        ch = ch.toLowerCase();
        if(count.has(ch))
            count.set(ch, count.get(ch) + 1);
        else
            count.set(ch, 1);
    });

    let max = 0;

    for(const [key, value] of count)
        if(value > max)
            max = value;

    return max;
};

console.log(countDuplicates("advantage"));
console.log(countDuplicates("abcd"));
console.log(countDuplicates("ABC"));