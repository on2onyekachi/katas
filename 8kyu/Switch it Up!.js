// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

function switchItUp(number){
    //Write your own Code!
      const words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']
      return words[number]
    }

    //SINGLE LINE OF SWITCH

    // function switchItUp(number){
    //     //Write your own Code!
    //       const words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']
    //       switch(number){
    //           default: return words[number]
    //       }
    //      }


    //LONG LINE OF SWITCH
    // function switchItUp1(number){
    //     switch (number){
    //     case 0:
    //     return "Zero";
    //     break;
    //     case 1:
    //     return "One";
    //     break;
    //     case 2:
    //     return "Two";
    //     break;
    //     case 3:
    //     return "Three";
    //     break;
    //     case 4:
    //     return "Four";
    //     break;
    //     case 5:
    //     return "Five";
    //     break;
    //     case 6:
    //     return "Six";
    //     break;
    //     case 7:
    //     return "Seven";
    //     case 8:
    //     return "Eight";
    //     break;
    //     default:
    //     return "Nine";
    //     }
    //   }
      

    switchItUp(1) // "One"
    switchItUp(3) // "Three"
    switchItUp(5) // "Five"