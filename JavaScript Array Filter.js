// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

function getEvenNumbers(numbersArray){
    // filter out the odd numbers
    return numbersArray.filter(x => x % 2 ==0)
  }


getEvenNumbers([1,2,3,6,8,10]) //  [2,6,8,10]
getEvenNumbers([1,2]) //  [2]
getEvenNumbers([12,14,15]) //  [12,14]
getEvenNumbers([13,15]) //  []
getEvenNumbers([1,3,9]) //  []

//LINK: https://www.codewars.com/kata/514a6336889283a3d2000001/train/javascript