// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x){
    if (isNaN(x) | x === "" ){
        return "Error"
    } else {
        return (x * 50) + 6;
    }
  }

problem("hello") //  "Error"
problem(1) // 56
problem(5) // 256
problem(0) // 6
problem(1.2) // 66
problem(3)// 156
problem("RyanIsCool") // "Error"
problem(-3) // -144
problem("") // "Error"
problem(0.03) // 7.5

//link: https://www.codewars.com/kata/55a5bfaa756cfede78000026/train/javascript