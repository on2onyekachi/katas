// *** No Loops Allowed ***

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

// Looking for more, loop-restrained fun? Check out the other kata in the series:

// No Loops 1 - Small enough?



function check(a,x){
    return a.includes(x)
  };

check([66, 101], 66) // true
check([80, 117, 115, 104, 45, 85, 112, 115], 45) // true
check(['t', 'e', 's', 't'], 'e') // true
check(['what', 'a', 'great', 'kata'], 'kat') // false

//LINK: https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce/train/javascript