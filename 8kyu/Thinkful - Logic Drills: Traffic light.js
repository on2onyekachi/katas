// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, update_light('green') should return 'yellow'.

function updateLight(current) {
  
    //your code here!
    let change = ''
    let trafficLight = ['green','yellow','red']
    for(let i =0; i < trafficLight.length; i++){
      if(current === trafficLight[i]){
        change = trafficLight[i+1]
        if(change == undefined){
          change = trafficLight[0]
        }
      }
    }
    
    return change
  }


updateLight("green") // "yellow"
updateLight("yellow") // "red"
updateLight("red") // "green"

//LINK: https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript