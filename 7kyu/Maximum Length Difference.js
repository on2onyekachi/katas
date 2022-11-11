// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

function mxdiflg(a1, a2) {
  // your code
  let arr = [];
  if (a1 && a2 && a1.length >= 1 && a2.length >= 1) {
    for (let x of a1) {
      for (let y of a2) {
        let diff = Math.abs(x.length - y.length);
        arr.push(diff);
      }
    }
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1];
  }
  return -1;
}

let s1 = [ "hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz",];
let s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
mxdiflg(s1, s2); // 13

//LINK: https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript
