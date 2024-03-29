// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

// Examples:
// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)

// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)

// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)

// n = 0
// m = 1
// result - division by zero (refer to the specifications on how to handle this in your language)

function remainder(n, m){
    // Divide the larger argument by the smaller argument and return the remainder
    let max = Math.max(n , m)
    let min = Math.min(n, m)
    return max % min  
  }

remainder(17,5) //  2, 'Returned value should be the value left over after dividing as much as possible. For input n = 17, m = 5'
remainder(13, 72) // 
remainder(72, 13) //  'The order the arguments are passed should not matter'
remainder(1, 0) //  'Divide by zero should return NaN'
remainder(0, 0) //  'Divide by zero should return NaN'

//LINK: https://www.codewars.com/kata/524f5125ad9c12894e00003f/train/javascript