// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
    // Code here
    let grade = ['A', 'B', 'C', 'D', 'F']
    let sum = s1 + s2 + s3
    let avg = sum / 3
    if(avg >= 90) return grade [0]
    else if(avg >= 80) return grade [1]
    else if(avg >= 70) return grade [2]
    else if(avg >= 60) return grade [3]
    return grade [4]
  }

getGrade(95,90,93) // 'A')
getGrade(100,85,96) // 'A')
getGrade(92,93,94) // 'A'
getGrade(70,70,100) // 'B')
getGrade(82,85,87) // 'B')
getGrade(84,79,85) // 'B')
getGrade(89,89,90) // 'B')
getGrade(70,70,70) // 'C')
getGrade(75,70,79) // 'C')
getGrade(60,82,76) // 'C'
getGrade(65,70,59) // 'D')
getGrade(66,62,68) // 'D')
getGrade(58,62,70) // 'D')
getGrade(44,55,52) // 'F')
getGrade(48,55,52) // 'F')
getGrade(58,59,60) // 'F')

//LINK: https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript