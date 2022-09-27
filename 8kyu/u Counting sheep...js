// that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
      let sheepCounter = 0;
      //loop number of sheep in array
      for(let i = 0; i < arrayOfSheep.length; i++) {
        //if sheep value is equal to true add one
        if(arrayOfSheep[i]=== true) {
          sheepCounter++;
        }
      }
      //return number of sheep
      return sheepCounter;
  }

  var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];                
countSheeps(array1) // 17, "There are 17 sheeps in total"

//llink: https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript