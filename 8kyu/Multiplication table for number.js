// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

function multiTable(number) {
    // good luck
   let msg = "";
      for (var i = 1; i <= 10; i++ ) {
          msg += `${i} * ${number} = ${i * number}${i == 10 ? '': '\n'}`;
      }
      return msg
  }

 multiTable(5) // '1 * 5 = 5   \n    2 * 5 = 10   \n    3 * 5 = 15   \n    4 * 5 = 20   \n    5 * 5 = 25   \n    6 * 5 = 30   \n    7 * 5 = 35   \n    8 * 5 = 40   \n    9 * 5 = 45   \n    10 * 5 = 50'
 multiTable(1) //  '1 * 1 = 1   \n    2 * 1 = 2   \n    3 * 1 = 3   \n    4 * 1 = 4   \n    5 * 1 = 5   \n    6 * 1 = 6   \n    7 * 1 = 7   \n    8 * 1 = 8   \n    9 * 1 = 9   \n    10 * 1 = 10'

 //link: https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript