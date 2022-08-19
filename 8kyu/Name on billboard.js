// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).

function billboard(name, price = 30){
    let total = 0
  for(let x of name){
    total += price
  }
    return total
  } 


  billboard("Jeong-Ho Aristotelis") // 600
billboard("Abishai Charalampos") // 570
billboard("Idwal Augustin") // 420
billboard("Hadufuns John",20) // 260
billboard("Zoroaster Donnchadh") // 570
billboard("Claude Miljenko") // 450
billboard("Werner Vígi",15) // 165
billboard("Anani Fridumar") // 420
billboard("Paolo Oli") // 270
billboard("Hjalmar Liupold",40) // 600
billboard("Simon Eadwulf") // 390


//LINK: https://www.codewars.com/kata/570e8ec4127ad143660001fd/train/javascript