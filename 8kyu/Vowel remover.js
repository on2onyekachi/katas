// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata


function shortcut (string) {
    let vowel = 'aeiou'
    let word = ''
    for(let x of string){
      word += (vowel.includes(x.toLowerCase())) ? '': x
    }
    return word
  }

  doTest('hello') // 'hll'
  doTest('how are you today?') // 'hw r y tdy?'
  doTest('complain') // 'cmpln'
  doTest('never') // 'nvr'

  //LINK: https://www.codewars.com/kata/5547929140907378f9000039/train/javascript