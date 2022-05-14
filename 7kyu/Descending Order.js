// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


function descendingOrder(n){
    //...
    let sorted = n.toString().split('').sort( (a,b) => b - a )
    let output = Number(sorted.join(''))
    return output
  }


descendingOrder(0)
descendingOrder(1)
descendingOrder(111)
descendingOrder(15)
descendingOrder(1021)
descendingOrder(123456789)


//LINK:  https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript