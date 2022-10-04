// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway


function noBoringZeros(n) {
    // your code
  let str = n.toString().split('');
    for (let i = 0; i <=str.length; i++){
      if(str[str.length-1] == '0'){
          str.pop();
        }
    }
    return Number(str.join(''))
  }

noBoringZeros(1450) //  145
noBoringZeros(960000) //  96
noBoringZeros(1050) //  105
noBoringZeros(-1050) //  -105
noBoringZeros(-105) //  -105
noBoringZeros(0) //  0

//LLINK: https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript