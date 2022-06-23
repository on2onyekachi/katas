// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
    // TODO: complete
    if(url.includes('#')){
      const idx = url.indexOf('#')
      let newArr = url.split('')
      newArr.splice(idx)
      return newArr.join('')
    }
    return url
  }


removeUrlAnchor('www.codewars.com#about') // 'www.codewars.com'
removeUrlAnchor('www.codewars.com/katas/?page=1#about') //  'www.codewars.com/katas/?page=1'
removeUrlAnchor('www.codewars.com/katas/') //  'www.codewars.com/katas/'

//LINK: https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript