
/*
  ! Logical Operators
  * We use to make decision based on multiple conditions
  * Logical AND '&&'
  * Logical OR  '||'
  * Logical NOT '!'
  * 
*/

console.log(true && true)

let highIncome = true;
let goodCreditScore = false;

let eligibleForLoan = highIncome && goodCreditScore;
let applicationRefused = !eligibleForLoan
console.log('eligibleForLoan',eligibleForLoan)
console.log('Refused',applicationRefused)

/* 
  * Truthy or Falsy
  * So in JavaScript we have these values which we refer to as Falsey or Truthy
  ! Falsey
  * That's not a boolean FALSE. its's FALSY
  ? What are these falsey values?
  * Falsey (not a boolean false it's falsy)
  * 1. Undefined
  * 2. null
  * 3. 0 (number)
  * 4. false (Boolean false)
  * 5. '' (Empty string)
  * 6. NaN (Not a Number) 
    * It's a special value in JavaScript, when we are dealing with mathematical calculation that doesn't produce a VALID number. this value is return (NaN)  
  * These are the falsey value in JavaScript.
  * If we use any of these values in a logical expression they will be treated as falsey(which is kind of like a boolean false(but it's not exactly the same))
  
  ! Short-Circuiting
*/

let a = 'red'
let b = 'blue'

let userColor = 'red'
let defultColor = 'blue'