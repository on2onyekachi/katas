// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity



function capitalize(s){
    let first = s.split('').map((x,i) => i % 2 == 0 ? x.toUpperCase() : x.toLowerCase()).join('')
    let second = first.split('').map((x,i) => i % 2 != 0 ? x.toUpperCase() : x.toLowerCase()).join('')
    return [first, second]
  };


capitalize("abcdef") // ['AbCdEf', 'aBcDeF']
capitalize("codewars") // ['CoDeWaRs', 'cOdEwArS']
capitalize("abracadabra") // ['AbRaCaDaBrA', 'aBrAcAdAbRa']
capitalize("codewarriors") // ['CoDeWaRrIoRs', 'cOdEwArRiOrS']

//LINK: https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript