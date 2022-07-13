// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 348597 => [7,9,5,8,4,3]
// 0 => [0]


function digitize(n) {
    //code here
   return n.toString().split('').reverse().map(x => +x)
  }


digitize(35231) // [1,3,2,5,3]
digitize(0) // [0]

//LINK: https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript