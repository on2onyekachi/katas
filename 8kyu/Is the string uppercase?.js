// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.


String.prototype.isUpperCase = function() {
    // your code here
    return this.toUpperCase()==this;
  }


'Hello World'.isUpperCase(), false, 'Hello World is not upper case'
'hello world'.isUpperCase(), false, 'hello world is not upper case'
'Hello world'.isUpperCase(), false, 'Hello world is not upper case'
'hello World'.isUpperCase(), false, 'hello World is not upper case'
'HELLO WORLD'.isUpperCase(), true, 'HELLO WORLD is upper case'
'Bob walks his dog every day.'.isUpperCase(), false, 'Bob walks his dog every day. is not upper case'
'BOB walks his dog every day.'.isUpperCase(), false, 'BOB walks his dog every day. is not upper case'
'BOB WALKS HIS DOG EVERY DAY.'.isUpperCase(), true, 'BOB WALKS HIS DOG EVERY DAY. is upper case'
'BOB WALKs HIS DOG EVERY DAY.'.isUpperCase(), false, 'BOB WALKs HIS DOG EVERY DAY. is not upper case'

//LINK: https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/solutions/javascript?filter=me&sort=best_practice