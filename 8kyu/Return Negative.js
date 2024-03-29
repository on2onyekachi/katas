// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
    // Code?
    if(num < 0) return num
    return (num * (-1))
  }

makeNegative(42) // -42
makeNegative(-9) // -9
makeNegative(0) // 0
makeNegative(1) // -1
makeNegative(-1) // -1
makeNegative(0.12) // -0.12
makeNegative(0.00001) // -0.00001
makeNegative(-0.00001) // -0.00001

//LINK: https://www.codewars.com/kata/55685cd7ad70877c23000102/solutions/javascript