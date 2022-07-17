// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.



function testEven(n) {
    //Your awesome code here!
  return (n % 2 == 0)
}

testEven(0) // true
testEven(0.5) // false
testEven(1) // false
testEven(2) // true
testEven(-4) // true

// LLink: https://www.codewars.com/kata/555a67db74814aa4ee0001b5/solutions/javascript