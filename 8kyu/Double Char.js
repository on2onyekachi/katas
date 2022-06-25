// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
    // Your code here
    let word = ''
    for(let x of str){
      word += x + x
    }
    return word
  }

  
  doubleChar("abcd") // "aabbccdd"
  doubleChar("Adidas") // "AAddiiddaass"
  doubleChar("1337") // "11333377"
  doubleChar("illuminati") // "iilllluummiinnaattii"
  doubleChar("123456") // "112233445566"
  doubleChar("%^&*(") // "%%^^&&**(("

  //LIVE: https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript