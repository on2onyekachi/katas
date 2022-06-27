// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    // Go for it
    let toArry = str.split(' ')
    return toArry.map(x => x.split('').reverse().join('')).join(' ')
  }

reverseWords('The quick brown fox jumps over the lazy dog.') // 'ehT kciuq nworb xof spmuj revo eht yzal .god'
reverseWords('apple') //  'elppa'
reverseWords('a b c d') // 'a b c d'
reverseWords('double  spaced  words') // 'elbuod  decaps  sdrow'


//LINK: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript