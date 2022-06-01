// The Database
// english: 'Welcome',
// czech: 'Vitejte',
// danish: 'Velkomst',
// dutch: 'Welkom',
// estonian: 'Tere tulemast',
// finnish: 'Tervetuloa',
// flemish: 'Welgekomen',
// french: 'Bienvenue',
// german: 'Willkommen',
// irish: 'Failte',
// italian: 'Benvenuto',
// latvian: 'Gaidits',
// lithuanian: 'Laukiamas',
// polish: 'Witamy',
// spanish: 'Bienvenido',
// swedish: 'Valkommen',
// welsh: 'Croeso'
// Possible invalid inputs include:

// IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
// IP_ADDRESS_NOT_FOUND - ip address not in the database
// IP_ADDRESS_REQUIRED - no ip address was supplied

function greet(language) {
	let data = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso' 
  }
  let arr = ['IP_ADDRESS_INVALID', 'IP_ADDRESS_NOT_FOUND', 'IP_ADDRESS_REQUIRED']
  let word = '' 
  for(let x in data){
    if(x.includes(language)){
      if(language === x){
        word = data[x]
      }
    }
  }
  for(let x of arr){
    if(language == x){
      word = data['english'] 
    }
  }
  console.log(word)
  return word
}

greet('english') // 'Welcome', "Your function should have returned 'Welcome'. Try again."
greet('dutch') // 'Welkom', "Your function should have returned 'Welkom'. Try again."
greet('IP_ADDRESS_INVALID') // 'Welcome', "Your function should have returned 'Welcome'. Try again."