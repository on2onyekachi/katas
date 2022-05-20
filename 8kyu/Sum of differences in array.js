// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell ).


function sumOfDifferences(arr) {
    let reversed = arr.sort((a,b) => b - a)
    let inc = reversed[0]
    let sum = 0
    for(let i = 0; i < reversed.length; i++){
      sum += (inc - reversed[i])
      inc = reversed[i]
    }
    return sum
}



sumOfDifferences([1, 2, 10]) // 9);
  
sumOfDifferences([-3, -2, -1]) // 2);
  
sumOfDifferences([1, 1, 1, 1, 1]) // 0);
  
sumOfDifferences([-17, 17]), //34);
  
sumOfDifferences([]) // 0);
  
sumOfDifferences([0]) // 0);
  
sumOfDifferences([-1]) // 0);
  
sumOfDifferences([1]) // 0);

//LINK: https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript