// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.

const arr = N => {
    let arry =[]
    for(let i = 0; i < N; i++){
      arry.push(i)
    }
    return arry
  };

  arr(10) // [0,1,2,3,4,5,6,7,8,9]

  //LINK: https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript