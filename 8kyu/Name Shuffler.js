// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"


function nameShuffler(str){
    //Shuffle It
     return str.split(' ').reverse().join(' ')
  }

 nameShuffler('john McClane') // 'McClane john'
 nameShuffler('Mary jeggins') // 'jeggins Mary'
 nameShuffler('tom jerry') // 'jerry tom'
 nameShuffler('Mary Jane') // 'Jane Mary'
 nameShuffler('John Doe') // 'Doe John'
 nameShuffler('William O\'Brien') // 'O\'Brien William'
 nameShuffler('George Huffingquane-McGafferty') // 'Huffingquane-McGafferty George'

  //LINK: https://www.codewars.com/kata/559ac78160f0be07c200005a/solutions/javascript