// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    let newStr = ''
    for(let i = str.length -1; i >= 0; i--){
        newStr += str[i]
    }
    return newStr
}

// solution('onyekachi')
// solution('world')
// solution('hello')
// solution('')
// solution('h')

//LLINK: https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

