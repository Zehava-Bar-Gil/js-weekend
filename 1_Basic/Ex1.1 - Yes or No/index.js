
/*--------------------------------------------------------------------------------------------
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No"
string for false.
----------------------------------------------------------------------------------------------*/

'use strict';


const booleanString = (boolean) => {
    return typeof boolean === "boolean" ?
        (boolean ? "Yes" : "No") :
        ("Undefined!");
}

console.log(booleanString(true));
console.log(booleanString(false));
console.log(booleanString(1));
console.log(booleanString("Zehava"));
