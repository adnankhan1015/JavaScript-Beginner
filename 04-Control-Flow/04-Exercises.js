/* 
  ! 1. FizzBuzz Algorithm
  * We have a function called "fizzbuzz" we give it an "input" and it returns a string. Done
  * So, if the number that we are passing is divisible by 3 we get "fizz"
  * if the number that we pass is divisible by 5 we get "buzz"
  * if the number that we pass is divisible by 3 and 5 we get "fizzbuzz"
  * If the number that we pass is not divisible by 3 and 5 we get same input
  * If we don't pass a number like we pass a string e.g 'ff' we get a Not a Number, the is true for boolean or anything that is not a number
*/
// alert();


function fizzbuzz(number) {
  const inputNumb = number;
  let outputNumber = '';

  if( inputNumb%5 == 0 && inputNumb%3 == 0)  {
    outputNumber = 'fizzbuzz';
  }

  else if(inputNumb%5 == 0) {
    outputNumber = 'Buzz';
  }

  else if(inputNumb%3 == 0) {
    outputNumber = 'Fizz';
  }

  else if(inputNumb%5 != 0 && inputNumb%3 != 0) {
    outputNumber = inputNumb+ ' Not Divisible by 3 and 5';
  }

  else{
    outputNumber = "Nothing";
  }

   return outputNumber;
}
console.log('FizzBuzz Algorithm ');
console.log(fizzbuzz(9));



/* 
  ! 2. maximum number
  * Write a function that takes two numbers and returns a the maximum of the two?
*/

function maximumNum(firstNumber, secondNumber){
    let num1 = firstNumber;
    let num2 = secondNumber;

    if( num1 >= num2){
      console.log( 'This number is greater',num1);
    }else{
      console.log('This number is greater',num2);
    } 
}
console.log('maximum number Algorithm');
maximumNum(5 , 8);
/* 
  ! 3. Show Number
  * Write a function that takes a limit(as s number). 
  * The functions shows, the even and odd numbers from 0 to the limit(that user pass into the function)
*/

function limit(limitnum){
  for(let i = limitnum; i >= 0; i--){
    if(i > limitnum) {
      console.log(i);
    }
  }
}
console.log('Show Number Algorithm');
limit(10);


/* 
  ! 4. Count Trhty
  * Create a function called countTruthy, which takes an array and returns a number of truthy elements in this array.
*/

let truthy = [0, 1, "", "hello", [], [1, 2, 3]];
let count = 0;
function countTruthy(truevalues){
  for(let element in truevalues){
    if(element){
      count++;
    }
  }
  return count;
}
console.log('Count Trhty Algorithm');
const counts =countTruthy(truevalues);
console.log(counts);



/*
  ! 5. String Properties
  * Create a function called showProperties.
    * We pass an object here and this function should display all the properties of this object that are of the type string.
*/

const car = {
  name: 'Mehran',
  model: 2023,
  color: 'Black',
  price: 3000000
};

function showProperties(properties){
  for(let key in properties){
    if(typeof properties[key] === 'string' ){
      console.log(properties[key]);
    }
  }
}
console.log('String Properties Algorithm');
showProperties(car);





