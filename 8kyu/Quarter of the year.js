// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (m) => {
    // Your code here
    if(12/m >= 12/3) return 1
    if(12/m >= 12/6) return 2
    if(12/m >= 12/9) return 3
    return 4
  }

quarterOf(3)// 1
quarterOf(8)// 3
quarterOf(11)// 4

//LINK: https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript