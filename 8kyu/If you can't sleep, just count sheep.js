// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
    //your code here
    let str = ''
    for(let i = 0; i < num; i++){
      str += `${i+1} sheep...`
    }
    return str
  }


countSheep(0) // "";
countSheep(1) // "1 sheep...";
countSheep(2) // "1 sheep...2 sheep...";
countSheep(3) // "1 sheep...2 sheep...3 sheep...";

  //LINK: https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript