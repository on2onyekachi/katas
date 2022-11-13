// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// GEOMETRYFUNDAMENTALS

function getSize(width, height, depth){
    let [surfaceArea, volume] = [(2*(width*height) + 2*(width * depth) + 2*(height * depth)),  (width*height*depth)]
    return  [surfaceArea, volume]
  }


getSize(4, 2, 6) //  [88, 48] 
getSize(10, 10, 10) //  [600, 1000]


//LINK: https://www.codewars.com/kata/565f5825379664a26b00007c/train/javascript