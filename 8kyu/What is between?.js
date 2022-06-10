// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
    // your code here
    let array = []
    if(a < b){
      for(let i = a; i <= b; i++){
        array.push(i)
      }
    }
    return array
  }
between(1, 4) // [1, 2, 3, 4]
between(-2, 2) // [-2, -1, 0, 1, 2]

//LINK: https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript