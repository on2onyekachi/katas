// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

function peopleWithAgeDrink(old) {
    let mes;
    if(old >= 21){
      mes = "drink whisky"
    }else if(old >= 18 && old <=21){
      mes = 'drink beer'
    }else if(old >= 14 && old <= 19){
      mes = 'drink coke'
    }else{
      mes = 'drink toddy'
    }
    return mes
  };

  peopleWithAgeDrink(22) //  'drink whisky'

  //link: https://www.codewars.com/kata/56170e844da7c6f647000063/train/javascript