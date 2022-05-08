// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
    //enter code here
    let output = ['even', 'odd']
    let sumOfArray = array.reduce((acc, inc) => acc += inc, 0)
    return (sumOfArray % 2 === 0) ? output[0] : output[1]
 }


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;


oddOrEven([0])
oddOrEven([1])
oddOrEven([])

oddOrEven([0, 1, 5])
oddOrEven([0, 1, 3])
oddOrEven([1023, 1, 2])

oddOrEven([0, -1, -5])
oddOrEven([0, -1, -3])
oddOrEven([-1023, 1, -2])

oddOrEven([0, 1, 2])
oddOrEven([0, 1, 4])
oddOrEven([1023, 1, 3])

  
oddOrEven([0, -1, 2])
oddOrEven([0, 1, -4])
oddOrEven([-1023, -1, 3])

