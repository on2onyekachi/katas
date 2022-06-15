// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
    // Finish this :)
    return (year % 100 == 0) ? parseInt(year/100) : parseInt(year/100)+1;        
  }


century(1705) // 18, 
century(1900) // 19, 
century(1601) // 17, 
century(2000) // 20, 
century(89) // 1

//LINK: https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript