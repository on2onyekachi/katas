// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function remove (string) {  
    let newStr = '';
    const last = string.length - 1;
    for(let i = last; i > 0; i--) {
      if(string[i] === '!') {
        continue;
      } else {
        newStr = string.slice(0,(i + 1));
        break;
      }
    }
    return newStr;
  }

  doTest("Hi!") // "Hi"
  doTest("Hi!!!") // "Hi"
  doTest("!Hi") // "!Hi"
  doTest("!Hi!") // "!Hi"
  doTest("Hi! Hi!") // "Hi! Hi"
  doTest("Hi") // "Hi"

  //LINK: https://www.codewars.com/kata/57faece99610ced690000165/train/javascript