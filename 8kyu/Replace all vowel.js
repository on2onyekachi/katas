// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s){
    //coding and coding....
    let vowel = 'aeiou'
    let word = ''
    for(let x of s){
      word += (vowel.includes(x.toLowerCase())) ? '!': x
    }
    return word
  }

replace("Hi!") // "H!!"
replace("!Hi! Hi!") // "!H!! H!!"
replace("aeiou") // "!!!!!"
replace("ABCDE") // "!BCD!"

//LIMK:  https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/train/javascript