// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

function hello(name) {
    if (name){
      let name1 = name.toLowerCase()
      let name2 = name1.charAt(0).toUpperCase() + name1.slice(1)
      return 'Hello, ' + name2 + '!';
    }
    return 'Hello, World!'
}

    let actualJohn = hello('johN');
    actualJohn //  "You have to return a string instead of logging it to the console");
    actualJohn //  'Hello, John!', "returns 'Hello, John!' when given 'johN'");
    hello('alice') //  'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'");
    hello() //  'Hello, World!', "returns 'Hello, World!' when name is not given");
    hello('') //  'Hello, World!', "returns 'Hello, World!' when name is an empty string");

    //link: https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript