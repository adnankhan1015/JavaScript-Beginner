
/* 
  ! Functions
  * In category of reference type on 3rd we have functions
  * A function is basically a set of statements that performs a task or calculates a value.
*/

// Function Declare

// let name;
// Performs a task 
function greetings(name, lastName) {
  // Function Body, this is where we add all the statements to define some logics in our application
  console.log('Hello ' + name + ' ' + lastName);

} // code blocks

// ! Function Call
greetings('John', 'Smith');

function square(number) {
  return number * number;
}

const number = square(3)
console.log(number)
console.log(square(3))

/* 
  ! Definition
  * A function is a set of statements that either performs a task or calculates a value. 
*/