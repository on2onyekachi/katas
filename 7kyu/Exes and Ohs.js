// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    //code here
  let x =0
  let o =0
  for(let al of str){
    if(al.toLowerCase() == 'x'){
      x++
    }
    if(al.toLowerCase() == 'o'){
      o++
    }
  }
  return (x == o)
}

XO('xo') // true
XO("xxOo") // true
XO("xxxm") // false
XO("Oo") // false
XO("ooom") // false

//LINK: https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript