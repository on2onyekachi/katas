// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
    let alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
    let alphaNum = []
    let trimText = text.toLowerCase()
    for(let i = 0; i < text.length; i++){
      for(let j = 0; j < alpha.length; j++){
        if(text.toLowerCase()[i] == alpha[j]){
        alphaNum.push(j+1)
      } 
      }
    }
    return alphaNum.join(' ');
  }

alphabetPosition("The sunset sets at twelve o' clock.") //  "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
alphabetPosition("The narwhal bacons at midnight.") // "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"

  //LINK: https://www.codewars.com/kata/546f922b54af40e1e90001da/solutions/javascript