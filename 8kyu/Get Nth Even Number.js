// Return the Nth Even Number

// Example(Input --> Output)

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466

function nthEven(n = 1){
    // your code here
     const next = n * 2;
     const res = next - 2;
     return res;
  }

nthEven(1) // 0,
nthEven(2) // 2,
nthEven(3) // 4,

nthEven(100) // 198,
nthEven(1298734) // 2597466,

//link: https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript