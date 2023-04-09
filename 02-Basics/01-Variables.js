/* 
  * One of the most fundamental concepts in JavaScript and any other programming languages.
*/

// var age; 
// let age = 'a';
// console.log(age);

// ! Rule for naming var.
/* 
  * 1. Cannot be a reserved word
  * 2. Should be meaningful labels(What kind of data are we storing on that memory location, Use descriptive name)
  * 3. Cannot start with a number
  * 4. Cannont contain a space or hyphen(-) (If multiple words put together used the camal notation, firstName)
  * 5. Variable are case sensitive(e.g let firstName and let FirstName are the different variables)
  * 6. Declare multiple variables in two ways.
  * e.g let firstName, lastName
  * e.g let firstName ='Qazi', lastName ='Farhan'
  * Declare each variable on a single line.
*/

// let interestRate = 0.3;
// interestRate = 1;
// console.log('intersetRate >>', interestRate)

// ! In a real world we want some variables to not change. Than we use constant(Value cannot change) instead of variable(value can change)

const interestRate = 0.3;
// interestRate = 1;
console.log('intersetRate >>', interestRate);


/* 
  ! What kind of value we can assign to a variable, Basically in JavaScript we have TWO Categories of type.

  * 1. Primitive types or Value Type
  * 2. Reference type
*/

// * 1. Primitive types or Value Types

let name = 'John' // String
let age = 33 // Number
let isApproved = false // boolean
let firstName = undefined // It's a value as well as type.
let lastName;
let selectedColors = null 

console.log(firstName, lastName)
// Implicitly and explicitly

// * we use "null" in a situation where we want to clear the value of a variable.


/*
  * One thing that separates JavaScript from a lot of programming languages is that JavaScript is a Dynamic Type Language

  ? What is the dynamic type?
  * We have two types of programming languages
  * 1. Static (Statically Typed)
    * In static, we declare a variable, the type of the variable is set and cannot be changed in the future. e.g string name = 'John' 
    * float number = 22.2
    * Double number = 22.222
  
  * 2. Dynamic (Dynamically Typed)
    * In Dynamic language like JavaScript, the type of a variable can change at run time. e.g let name = 'John' 
*/



/*
 * 2. Reference type
  * 1. Objects
  * 2. Array
  * 3. Function
*/

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