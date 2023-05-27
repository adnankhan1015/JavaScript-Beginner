// ! Sorting Array

const numbers = [2, 1, 3];
numbers.sort();
console.log(numbers);
numbers.reverse();
console.log(numbers);

const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javaScript" },
];

/*
 * Now in this function, if a os less than b we should return minus 1. e.g => a < b => -1
 * If a is greater than b we should return 1. e.g => a > b => 1
 * and if they're equal we should return 0. e.g => a === b => 0
 * ASCII => American Standard Code for Information Interchange
 */

courses.sort((a, b) => {
  // a < b => -1
  // a > b => 1
  // a === b => 0
  const nameA = a.name.toLocaleLowerCase();
  const nameB = b.name.toLocaleLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
console.log(courses);

numbers.sort();

// ! TEsting the elements of an array every() and some()
const numbersArray = [1, -1, 2, 3];
const allPositive = numbersArray.every((value) => value >= 0);
console.log(allPositive);

const atLeastOnePositive = numbersArray.some((value) => value > 0);
console.log(atLeastOnePositive);

function testSum(a, b) {
  return a + b;
}
const testSumArrow = () => {};
testSumArrow();
// console.log(testSum(1, 2));

// ! Filtering An array

// * You want to return only the positve numbers.So we can use the filter method.

const numbersFilterArray = [1, -1, -2, 2, 3, -4];
// * It returns a new array based on the criteria that we define in the callback function
// ! Using regular function way to understand
const filtered = numbersFilterArray.filter(function (value) {
  return value >= 0;
});

const filteredArrowFunction = numbersFilterArray.filter((value) => value >= 0);
console.log(filteredArrowFunction);

// ! MAPPING an array
// * e.g => We have mapped these numbers to string,
// ! Convert elements to STRING
const items = filteredArrowFunction.map((n) => "<li>" + n + "</li>");

const html = "<ul>" + items.join("") + "</ul>";
console.log(items);
console.log(html);

// ! but you can also map them to object
const mapObjects = filtered.map((n) => {
  const obj = { value: n };
  return obj;
});
// * Refeactored the above code
const mapRefactoredObj = filtered.map((n) => ({ value: n }));
console.log(mapObjects);

// ! Chainable methods

const chainMethods = numbersFilterArray
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);
console.log(chainMethods);

// ! Reducing method

const reduceNumberArray = [1, -1, 2, 3];

let sum = 0;
for (let n of reduceNumberArray) sum += n;
console.log(sum);

const sumReduce = reduceNumberArray.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sumReduce);

/*
    * initially we set accumulator to 0
    * a = 0, c = 1  => a = 1
    * a = 1, c = -1 => a = 0
    * a = 0, c = 2  => a = 2
    * a = 2, c = 3  => a = 5

*/
