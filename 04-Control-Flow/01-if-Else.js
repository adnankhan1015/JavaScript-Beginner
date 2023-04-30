/*
  ! Control FLow
  * 1. if...else
  * expression and Operators
  * We are going to use these expressions and operators along with conditional statements to implement interactivity in our application.
  * In JavaScript, we have two types of conditional statements
    * 1. if...else
    * 2. switch case 
*/

// if(condition) {
//   statement
// } else if(condition) {
//   statement
// } else {
//   statement
// }

let hour = 17;

if(hour >= 6 && hour < 12) {
  console.log('Good Morning')
} else if(hour >= 12 && hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night')
}

// ! Switch 

let role = 'guest';

switch(role) {
  case 'guest':
    console.log('Guest User');
    break;
  case 'Admin':
    console.log('Admin User');
    break;
  default:
    console.log('Unknown role')

}