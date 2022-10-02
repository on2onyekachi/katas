// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

// http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

"use strict";

function flattenAndSort(array) {
  // Good luck, brave code warrior!
   let outcome = [];
    array.forEach(arr => {
        for (let i of arr)
            outcome.push(i);
    });
    return outcome.sort(((a, b) => a - b));
}

flattenAndSort([]) //    []
flattenAndSort([[], []]) //    []
flattenAndSort([[], [1]]) //    [1]
flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]) //    [1, 2, 3, 4, 5, 6, 7, 8, 9]
flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]) //    [1, 2, 3, 4, 5, 6, 100]

//LINK: https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript