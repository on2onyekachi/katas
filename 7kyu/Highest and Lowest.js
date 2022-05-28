/* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

function highAndLow(numbers){
  // ...
  let num=numbers.split(' ');
  let max = parseInt(num[0]);
  let min = parseInt(num[0]);
  for (let i = 0; i <= num.length; i++) {
    if(parseInt(num[i]) > max){
      max = parseInt(num[i]);
    }
  }
  for (let i = 0; i <= num.length; i++) {
    if(parseInt(num[i]) < min){
      min = parseInt(num[i]);
    } 
 }
 return (max + " " + min);
}

highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")// "542 -214"
highAndLow("10 2 -1 -20")// "10 -20"
highAndLow("1 -1") // "1 -1"
highAndLow("1 1") // "1 1"
highAndLow("-1 -1")// "-1 -1"
highAndLow("1 -1 0") // "1 -1"
highAndLow("1 1 0")// "1 0"
highAndLow("-1 -1 0")// "0 -1")
highAndLow("42") // "42 42")


