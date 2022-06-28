// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    let arry = []
    let cur = ''
    for(let x of iterable){
      if(x != cur){
        cur = x
        arry.push(x)
      }
    }
    return arry
  }
  
uniqueInOrder('ABBCcAD') //['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder('AA') // ['A']
uniqueInOrder('AAAABBBCCDAABBB') // ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('AADD') // ['A','D']
uniqueInOrder('AAD') // ['A','D']
uniqueInOrder('ADD') // ['A','D']
uniqueInOrder([1,2,3,3]) // [1,2,3]

  //LINK: https://www.codewars.com/kata/54e6533c92449cc251001667/solutions/javascript