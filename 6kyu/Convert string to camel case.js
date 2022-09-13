// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"


function toCamelCase(str){
    let arr = []
    let word = str.replace(/\_/g, '-').split('-')
    return word.map((item , idx) => {
      let i = item.slice(1)
      return item = idx == 0 ? item : item.charAt(0).toUpperCase() + i
    }).join('')
  }


toCamelCase('') // '', "An empty string was provided but not returned"
toCamelCase("the_stealth_warrior") //  "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value"
toCamelCase("The-Stealth-Warrior") //  "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value"
toCamelCase("A-B-C") //"ABC", "toCamelCase('A-B-C') did not return correct value"

// LINK: https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript