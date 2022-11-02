// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
    let newArr = []
    let first = array[0]
    for(let i = 1; i <= array.length-1; i++){
     newArr.push(first >= array[i] ? 'yes' :'no')
    }
    let mes;
    if(newArr.includes('yes') && newArr.includes('no')){
      mes = 'no'
    }else if(newArr.includes('no')){
      mes = 'yes, ascending'      
    }else{
      mes = 'yes, descending'
    }
    return mes
  }


isSortedAndHow([1, 2]) //  'yes, ascending'
isSortedAndHow([15, 7, 3, -8]) //  'yes, descending'
isSortedAndHow([4, 2, 30]) //  'no'

//LINK: https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript