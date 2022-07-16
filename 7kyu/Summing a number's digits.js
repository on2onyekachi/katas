// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.


function sumDigits(number) {
    let arry = number.toString().split('').map(x => x>= 0 ? Number(x) : 0)
    return arry.reduce((cur, inc) => cur += inc)
  }

sumDigits(10) // 1
sumDigits(99) // 18
sumDigits(-32) // 5

//LINK: https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript

