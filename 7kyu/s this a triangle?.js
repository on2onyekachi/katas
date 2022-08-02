// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a,b,c)
{
   return a+b>c&&a+c>b&&b+c>a
}

isTriangle(4,2,3) // true
isTriangle(5,1,5) // true
isTriangle(2,2,2) // true
isTriangle(-1,2,3) // false
isTriangle(1,-2,3) // false
isTriangle(1,2,-3) // false       
isTriangle(-5,1,3) // false
isTriangle(0,2,3) // false


//LINK: https://www.codewars.com/kata/56606694ec01347ce800001b/solutions/javascript