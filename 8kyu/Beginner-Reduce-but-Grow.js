// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
    return x.reduce((acc, inc) => acc * inc)
  }


grow([1, 2, 3])
grow([4, 1, 1, 1, 4])
grow([2, 2, 2, 2, 2, 2])

//   LINK: https://www.codewars.com/kata/57f780909f7e8e3183000078/solutions/javascript/me/best_practice