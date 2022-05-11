// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    let output = []
    let toString = String(num)
    let newOutput = toString.split('')
    for(let x of toString){
      let toNum = Number(x)
      output.push(toNum * toNum)
     }
     let change = Number(output.join(''))
     return change
  }


squareDigits(0)
squareDigits(2112)
squareDigits(3212)


//LINK:  https://www.codewars.com/kata/546e2562b03326a88e000020/solutions/javascript/me/best_practice