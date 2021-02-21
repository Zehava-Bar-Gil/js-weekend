/*------------------------------------------------------------------------------------------
It's pretty straightforward. Your goal is to create a function that removes the first and last
characters of a string. You're given one parameter, the original string. You don't have to worry
with strings with less than two characters.
--------------------------------------------------------------------------------------------*/

'use strict';

const getString = (str) => {
    return str.slice(1, -1);
  }
  
  console.log(getString("zehava bar gil"))