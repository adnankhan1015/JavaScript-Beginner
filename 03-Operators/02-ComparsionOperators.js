
/*
  ! Comparison Operators
  * Use this operator to compare the value of a variable with something else.
  * The result of an expression that includes a comparison operator is a boolean.
*/

let x = 1;
console.log(x > 0);

// ! Relational Operators(4)
console.log(x < 1);
console.log(x <= 1);

// ! Equality Operators
console.log(x === 1);

console.log(x !== 1);

/*
  ! === vs ==
  * Stict Equality Operator(===) (Type + Value)

  * Loose Equality Operator(==) (Value)
*/


console.log('Srtict','1' === 1)
console.log('Loose','1' == 1)

/* 
  ! Ternary Operator or Conditional Operator in JavaScript
  * 
*/

let points = 110;

let type = points > 100 ? 'Gold' : 'Silver';
console.log(type);
