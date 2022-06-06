// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowelsCount = 0;
    
    // enter your magic here
    let vowels = ['a','e','i','o','u']
    for(let x of str){
      if(vowels.includes(x)){
        vowelsCount++
      }
    }
    
    return vowelsCount;
  }

getCount("abracadabra") // 5
getCount("o a kak ushakov lil vo kashu kakao") // 13
getCount("pear tree") // 4
getCount("my pyx") // 0

//LINK: https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript