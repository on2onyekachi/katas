// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.


function reverse(str){
    //WRITE SOME MAGIC
    let trimmed = str.trim().split(' ')
    return trimmed.map((item, idx) => {
      return (idx % 2 == 0) ? item : item.split('').reverse().join('')
    }).join(' ')
  }

reverse("Reverse this string, please!") // "Reverse siht string, !esaelp"
reverse("I really don't like reversing strings!") // "I yllaer don't ekil reversing !sgnirts"

//link: https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript