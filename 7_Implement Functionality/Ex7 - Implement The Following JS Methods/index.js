/*------------------------------------------------------------------------------------------
Implement the following methods -
- Filter
- ForEach
- Map
Using only for(), array and objects (without other js methods)
--------------------------------------------------------------------------------------------*/

'use strict';

const myFilter = (arr, callBack) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callBack(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  let array = [10, 15, 20, 25, 30, 35, 40, 45, 50];
  console.log(myFilter(array, (currentValue => currentValue % 2 === 0)));
  
  
  
  const myForeach = (arr, callBack) => {
    for (let i = 0; i < arr.length; i++) {
      callBack(arr[i]);
    }
  }
  
  myForeach(array, (value => console.log(value)));
  
  
  const myMap = (arr, callBack) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callBack(arr[i]));
    }
    return result;
  }
  
  console.log(myMap(array, (value => value * 2)));