
// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

function mergeArrays(arr1, arr2) {
    let c = [...arr1]
    for(let i of arr2){
      if(!(c.includes(i))){
        c.push(i)
      }
    }
    return c.sort((a,b) => a- b)
  }

mergeArrays([1,2,3,4], [5,6,7,8]) //  [1,2,3,4,5,6,7,8]
mergeArrays([1,3,5,7,9], [10,8,6,4,2]) //  [1,2,3,4,5,6,7,8,9,10]
mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]) // [1,2,3,4,5,7,9,10,11,12]

// link: https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript