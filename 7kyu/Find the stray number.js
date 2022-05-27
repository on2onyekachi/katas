// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    return numbers.reduce((a, b) => a ^ b);
  }

  stray([1, 1, 2])// 2)

  stray([17, 17, 3, 17, 17, 17, 17])// 3)
  
  stray([8, 1, 1, 1, 1, 1, 1])// 8)
  
  stray([1, 1, 1, 1, 1, 1, 0])// 0)
  
  stray([0, 0, 0, 7, 0, 0, 0])// 7)
  
  stray([-21, -21, -21, -21, -6, -21, -21])//-6)
  