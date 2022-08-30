// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(letter){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
  }

//   thekachi
function position(letter){
//Write your own Code!
  let alpha = {
    a : 1,
    b : 2,
    c : 3,
    d : 4,
    e : 5,
    f : 6,
    g : 7,
    h : 8,
    i : 9,
    j : 10,
    k : 11,
    l : 12,
    m : 13,
    n : 14,
    o : 15,
    p : 16,
    q : 17,
    r : 18,
    s : 19,
    t : 20,
    u : 21,
    v : 22,
    w : 23,
    x : 24,
    y : 25,
    z : 26
  }
 return `Position of alphabet: ${alpha[letter]}`
}

 position("a") // "Position of alphabet: 1"
 position("z") // "Position of alphabet: 26"
 position("e") // "Position of alphabet: 5"

 //llink: https://www.codewars.com/kata/5808e2006b65bff35500008f/solutions/javascript?filter=me&sort=best_practice&invalids=false ghcgxw