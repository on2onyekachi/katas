// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let bmi = weight / Math.pow(height, 2)
    return bmi > 30 ? 'Obese' : bmi <= 30 && bmi > 25 ? 'Overweight' :  bmi <= 25 && bmi > 18 ? 'Normal' : 'Underweight'
  }

bmi(80, 1.80) //  "Normal"

//LINK: https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript