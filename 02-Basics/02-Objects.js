
/* 
  ? What is an object?
  * An object is JavaScript, and other programming languages is like an object in real world. like think of a person.
  * A person has, name, age, address, and so so on.
  * These are the properties of a person 
  * We have the same concept in JavaScript
  * When we are dealing with multiple related variables we can put these variables inside of an object.
*/

let personName = 'John'
let personAge = 22
let personAddress = 'G 11'


let person = {
  // * Inside of this we have key value pairs. The keys are what we called the properties of this object.
  name: 'Mike',
  age: 22,
  address: 'G11'
};  

console.log(person)

/* 
  ! There are 2 ways to work with these properties.
  * We need to access the properties e.g name, age, address
  * 1. Dot Notation
    * We can use the dot notation to also read the value of the property, instead of logging the person object we can log it's name property
    * e.g console.log(person.name)
  * 2. Bracket Notation
*/
// * 1. Dot Notation
console.log(person.name)

/*
  * 2. Bracket Notation
    * We pass a string that determined the name of the target property. The name of the target property is name, For reading we can use the dot notation notation or the bracket notation.
    ! Sometime we do not know the name of the target property until the run time.
*/
person['name'] = 'John'
console.log(person['name'])
