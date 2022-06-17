// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    // code away
  return name.toUpperCase().split(" ").reduce((a, b) => `${a[0]}.${b[0]}`)
}


abbrevName("Sam Harris") // "S.H"
abbrevName("Patrick Feenan") // "P.F"
abbrevName("Evan Cole") // "E.C"
abbrevName("P Favuzzi") // "P.F"
abbrevName("David Mendieta") // "D.M"

//LINK: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript