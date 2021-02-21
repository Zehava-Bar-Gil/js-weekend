/*------------------------------------------------------------------------------------------
The first century spans from the year 1 up to and including the year 100, The second - from the
year 101 up to and including the year 200, etc.
Task :
Given a year, return the century it is in.
--------------------------------------------------------------------------------------------*/

'use strict';

const CenturyOfYear = (year) => {
    return Math.ceil(year / 100);
  }
  
  console.log(CenturyOfYear(1900));
  console.log(CenturyOfYear(1601));
  console.log(CenturyOfYear(2000));