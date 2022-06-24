// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString) {
  // return the girl's correct age as an integer. Happy coding :)
  return parseInt(inputString[0]);
}

getAge("4 years old") // 4
getAge("5 years old") // 5
getAge("7 years old") // 7
getAge("6 years old") // 6
getAge("8 years old") // 8
getAge("9 years old") // 9
getAge("1 year old") // 1
getAge("2 years old") // 2
getAge("3 years old") // 3


//LINK: https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1/solutions/javascript