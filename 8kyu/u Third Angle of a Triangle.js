// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

function otherAngle(a, b) {
    return 180 - (a + b);
  }

otherAngle(30, 60) // 90
otherAngle(60, 60) // 60
otherAngle(43, 78) // 59
otherAngle(10, 20) // 150

//LINK :https://www.codewars.com/kata/5a023c426975981341000014/train/javascript