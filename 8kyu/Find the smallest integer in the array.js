// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
    findSmallestInt(args) {
      let min = args[0]
      for(let x of args){
        if(x < min){
          min = x
        }
      }
      return min
    }
  }


findSmallestInt([78,56,232,12,8]) //8,'Should return the smallest int 8');
findSmallestInt([78,56,232,12,18]) //12,'Should return the smallest int 12');
findSmallestInt([78,56,232,412,228]) //56,'Should return the smallest int 56');
findSmallestInt([78,56,232,12,0]) //0,'Should return the smallest int 0');
findSmallestInt([1,56,232,12,8]) //1,'Should return the smallest int 1');

//LINK: https://www.codewars.com/kata/55a2d7ebe362935a210000b2/solutions/javascript