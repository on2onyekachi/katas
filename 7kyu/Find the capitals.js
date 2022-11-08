// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
	// Write your code here
let arr = []
  for(i=0; i<=word.length-1; i++){
    if(word[i] == word[i].toUpperCase()){
      arr.push(i)
    }
  }
  return arr
};

capitals('CodEWaRs') // [0,3,4,6] 

//LINK: https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript