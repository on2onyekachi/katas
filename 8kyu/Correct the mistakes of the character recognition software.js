// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string)
{
	// your code here
  let arry = ['S', 'O', 'I']
  let word = ['5','0','1']
  let toArry = string.split('')
  for(let i =0; i<toArry.length; i++ ){
    for(let j = 0; j < word.length; j++){
       if(toArry[i] == word[j]){
          toArry[i] = arry[j]
        }
    }
  }
  return toArry.join('')
}
correct("L0ND0N")// "LONDON"
correct("DUBL1N")// "DUBLIN"
correct("51NGAP0RE")// "SINGAPORE"
correct("BUDAPE5T")// "BUDAPEST"
correct("PAR15")// "PARIS"


//LINK: https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript