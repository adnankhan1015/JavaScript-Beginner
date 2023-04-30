/* 
  ! Loops
  * Sometime we want to repeat an action a number of times
*/


// console.log('Hello')
// console.log('Hello')
// console.log('Hello')
// console.log('Hello')
// console.log('Hello')

// That's where we use loops all these loops are doing the same thing. They repeat an action a number of times.

/* 
  ! For Loop
  * In for loop we need to add 3 statements
  * 1. Initial Expression (This is also called a loop variable)
  * 2. Consdtion (Here we want to add a condition and compare the value of "i" with something else). This loop will run as long as this condition is true
  * 3. Increment/Decrement Expression
*/

for(let i = 5; i >= 1; i--) {
  // one or more statements
  // if(i % 2 !== 0) console.log(i)
}

// ! While loop
let i = 0
while(i <= 5){
  // console.log(i)
  i++
}

/*
  ! do...while loop
  * are always executed at least once. Even if the condition evaluates to false 
*/
let x = 0;
do {
  // if(x % 2 !== 0) console.log(x)
  x++;
} while(x <= 5);

/* 
  ! For...in
  * We have other loops and we use them to iterate over the properties of an object or elements of an array.
*/

const person = {
  name: 'john',
  age: 30
}

/*
  * Lets we want to display the properties of this object that's when we use the for..in loop
  * So in every iteration this "key" variable in the loop will hold the name of one of the properties in this person object
  * In first iteration key is name and in second iteration is age.
  ? Now what if want to display the value of each property next to it
*/

for(let key in person) {
  console.log(key, person[key])
}

/*
  * We can also use these to iterate over an array.
  ! BUT, its not an ideal way.
*/

const colors = ['red', 'green', 'blue'];

for(let index in colors) {
  console.log(index, colors[index])
}

/* 
  * in ES6 we have a new way to iterate over a arrays and that is using the array.
  ! for...of loop.
  * We don't have to access this index, we don't have to access this element at the given index. console.log(index, colors[index])
  * So in each iteration this color which is our loop variable will hold one of the items in this array.
*/

for(let color of colors) {
  console.log(color)
}