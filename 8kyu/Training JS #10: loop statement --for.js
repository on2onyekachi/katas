// for loop is one of the most frequently used loop statements in JS. It works like while loop. In lesson 9, we wrote a while loop:

// function sum1_100(){
//   var sum=0,num=1
//   while (num<=100){
//     sum+=num;
//     num++;
//   }
//   return sum;
// }
// We can rewrite it by using for loop, like this:

// function sum1_100(){
//   for (var sum=0,num=1;num<=100;num++){
//     sum+=num;
//   }
//   return sum;
// }
// As you see, there are three parts in the brackets, separated by ";". The first part is the initialization variable, this part will run before the loop starts. The second part is the conditional expressions, check the expression before the start of each time loops, when the value of the expression is false, loop will be terminated. The third part is the statement about increasing and decreasing variables, they will run after the code block.

// For the example above, the running order of the code is:

//                               <--- back to part 2
//                   -------------------------------------------
//                   |                 true                    |
// var sum=0,num=1  --->  num<=100 ?  ------> code block---> num++
//                                 |  
//                            false|
//                        loop terminated
// When you need to traverse an array, you can use the for loop. look this example:

// function displayElements(array){
//   for (var i=0;i<array.length;i++){
//     console.log(array[i]);
//   }
// }
// This function will display every element of array on your screen.

// Ok, lesson is over, let's us do some task with for.

// Task
// Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.

// I've defined two array odd and even in the function, and also wrote the return statement. your work is write a for loop.

// If you forgot how to push an element to array, please refer to lesson 4.



function pickIt(arr){
    var odd=[],even=[];
    //coding here
    for(let num of arr){
      (num % 2 == 0) ? even.push(num) : odd.push(num)
    }
    return [odd,even];
  }

pickIt([1,2]) // [[1],[2]]
pickIt([1,2,3]) // [[1,3],[2]]
pickIt([3,2,1]) // [[3,1],[2]]
pickIt([10,20,30]) //[[],[10,20,30]]
pickIt([11,21,31]) // [[11,21,31],[]]
pickIt([8,1,5,4,6,1,1]) // [[1,5,1,1],[8,4,6]]

//LINK: https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript