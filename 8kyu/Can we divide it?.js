// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

// A few cases:


// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true

function isDivideBy(number, a, b) {
    // good luck
    return (number % a == 0 && number % b == 0)
  }

  isDivideBy(-12, 2, -6) //  true
  isDivideBy(-12, 2, -5) // false
  isDivideBy(45, 1, 6) // false
  isDivideBy(45, 5, 15) //  true)
  isDivideBy(4, 1, 4) //  true
  isDivideBy(15, -5, 3) //  true

  //LINK:  https://www.codewars.com/kata/5a2b703dc5e2845c0900005a/train/javascript