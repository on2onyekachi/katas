// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


function solution(str, ending){
    // TODO: complete
    if(str.endsWith(ending)){
      return true
    }
    return false
  }



check("samurai", "ai")
check("sumo", "omo")
check("ninja", "ja")
check("sensei", "i")
check("samurai", "ra")
check("abc", "abcd")
check("abc", "abc")
check("abcabc", "bc")
check('ails', 'fails')
check('fails', 'ails')
check('this', 'fails')
check("abc", "")
check(":-)", ":-(")
check("!@#$%^&*() :-)", ":-)")


  //LINK: https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript