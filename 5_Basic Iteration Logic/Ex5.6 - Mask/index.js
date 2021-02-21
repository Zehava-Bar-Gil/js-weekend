/*-----------------------------------------------------------------------------------------------
Usually when you buy something, you're asked whether your credit card number, phone number
or answer to your most secret question is still correct. However, since someone could look over
your shoulder, you don't want that shown on your screen. Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'.
--------------------------------------------------------------------------------------------------*/

'use strict';

const maskify = (string) => {
    return string.split("").map((ch, index) => string.length - index > 4? '#' : ch).join("");
}


console.log(maskify("4580203085816123"));
console.log(maskify("0506618662"));
console.log(maskify("zehava"));
console.log(maskify("2"));