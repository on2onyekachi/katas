// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    // your code here
    let reversed = x.toLowerCase().split('').reverse()
    return reversed.join('') == x.toLowerCase()
  }

isPalindrome("a") // true
isPalindrome("aba") // true
isPalindrome("Abba") // true
isPalindrome("hello") // false
isPalindrome("Bob") // true
isPalindrome("Madam") // true
isPalindrome("AbBa") // true
isPalindrome("") // true