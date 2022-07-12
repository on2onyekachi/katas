// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


// complete the function
function solution(string) {
    let str = ''
    for(let char of string){
      if(char == char.toUpperCase()){
        str += ' ' +char
      }else{
        str += char
      }
    }
  return str
}

//S0lution 2

function solution(string) {
    return string.split('').map(x => x == x.toUpperCase() ? ' '+x : x).join('')
}


solution('camelCasing') // 'camel Casing'
solution('camelCasingTest') // 'camel Casing Test'

//link: https://www.codewars.com/kata/5208f99aee097e6552000148/solutions/javascript