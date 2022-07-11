// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

function howMuchILoveYou(nbPetals) {
    // your code
  let arry = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all' ]
  switch(nbPetals > 0){
      case (nbPetals%6 == 1) :
        return arry[0];
      case (nbPetals%6 == 2) :
        return arry[1];
      case (nbPetals%6 == 3):
        return arry[2];
      case (nbPetals%6 == 4) :
        return arry[3];
      case (nbPetals%6 == 5) :
        return arry[4];
      default:
        return arry[5]
  }
}

howMuchILoveYou(7) // "I love you"
howMuchILoveYou(3) // "a lot"
howMuchILoveYou(6) // "not at all"

//link: https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript