// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
    //your code here
    for(let i = 0; i < arr.length; i++){
        arr.splice(i+1,1)
    }
    return arr
}


removeEveryOther(['Hello', 'Goodbye', 'Hello Again']) //['Hello', 'Hello Again']
removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // [1, 3, 5, 7, 9]
removeEveryOther([[1, 2]]) // [[1, 2]]
removeEveryOther([['Goodbye'], {'Great': 'Job'}]) //[['Goodbye']]


//link: https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript