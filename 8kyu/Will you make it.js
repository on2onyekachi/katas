/*
  Title:
    Will you make it?
  Description:
    You were camping with your friends far away from home, but when it's time to go back,
    you realize that you fuel is running out and the nearest pump is 50 miles away!
    You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
    Considering these factors, write a function that tells you if it is possible to get to the pump or not.
    Function should return true if it is possible and false if not.
  Kata Link:
    https://www.codewars.com/kata/will-you-make-it
  Discuss Link:
    https://www.codewars.com/kata/will-you-make-it/discuss
  Solutions Link:
    https://www.codewars.com/kata/will-you-make-it/solutions
*/

  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    return mpg * fuelLeft >= distanceToPump
  };


//   zeroFuel(50, 25, 2)
// zeroFuel(100, 50, 1)

//LINK: https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript