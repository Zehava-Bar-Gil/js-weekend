/*------------------------------------------------------------------------------------------
“Write a function to return an n element in Fibonacci sequence” is one of the most common
questions you can hear during the coding challenge interview part. In this blogpost I’m going to
walk through the two of the most typical solutions for this problem and also cover a dreadful (for
most of novice developers) topic of time complexity.
So what is a Fibonacci sequence? According to Wikipedia :
“In mathematics, the Fibonacci numbers are the numbers in the following integer sequence,
called the Fibonacci sequence, and characterized by the fact that every number after the first
two is the sum of the two preceding ones.”
--------------------------------------------------------------------------------------------*/

'use strict';

const fibonacci = (num) => {
    if (num === 0) {
      return 0;
    } else if (num === 1) {
      return 1;
    }
    let fibon = [0, 1];
    for (let i = 2; i <= num; i++) {
      fibon.push(fibon[i - 1] + fibon[i - 2]);
    }
    return fibon;
  }

  console.log(fibonacci(10));
  console.log(fibonacci(18));