// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    let word  = ''
    for(let x of s){
      if(x == '!'){
        word += ''
      }else{
      word += x
        }
    }
    return word
  }

  
  removeExclamationMarks("Hello World!") // "Hello World"
  removeExclamationMarks("Hello World!!!") // "Hello World"
  removeExclamationMarks("Hi! Hello!") // "Hi Hello"

  //LINK: https://www.codewars.com/kata/57a0885cbb9944e24c00008e/javascript