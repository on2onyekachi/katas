
// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
// References

// http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
// http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html


var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    let dogYears = 0
    let catYears = 0
    for(let i = 1; i <= humanYears; i++){
      if(i == 1){
        dogYears += 15;
        catYears += 15;
      }else if(i == 2){
        dogYears += 9;
        catYears += 9;
      }else{
        dogYears += 5;
        catYears += 4;
      }
    }
    return [humanYears,catYears,dogYears];
  }


humanYearsCatYearsDogYears(1) // [1,15,15]
humanYearsCatYearsDogYears(2) // [2,24,24]
humanYearsCatYearsDogYears(10) // [10,56,64]

// Link:  https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/solutions/javascript