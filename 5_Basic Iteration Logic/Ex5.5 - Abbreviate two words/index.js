/*------------------------------------------------------------------------------------------
Write a function to convert a name into initials. This kata strictly takes two words with one space
in between them.
The output should be two capital letters with a dot separating them.
--------------------------------------------------------------------------------------------*/

'use strict';

const nameInitials = (name) => {
    return name.split(" ").map(value => {
      return value.split("")[0].toUpperCase();
    }).join(".");
  }
  
  console.log(nameInitials("zehava bargil"));