// ! Adding element into an array
const numbers = [3, 4];

// Adding element to the end
numbers.push(5, 6, 7, 8);

// Beggining
numbers.unshift(1, 2);

// Splice
numbers.splice(2, 0, "a");

/*
    ! Finding elements
    * It really depends on if you are storing primitive or reference elements 
*/

// ! Finding elements(Primitive Types)
console.log(numbers.indexOf(2));
console.log("Last Index", numbers.lastIndexOf(1) !== -1);
console.log("Includes Primitive", numbers.includes(1));

console.log(numbers);

// ! Finding elements(References Types)
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

// console.log("Includes Ref", numbers.includes({ id: 1, name: "a" }));

// const course = { id: 1, name: "a" }
// course.name
// course.id

const findCourse = courses.find(function (course) {
  return course.name === "a";
});

// console.log(findCourse);

const findCourseIndex = courses.findIndex((course) => {
  return course.name === "abc";
});

// console.log("Ref find", findCourseIndex);

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(function (element) {
  return element > 10;
});

// console.log(found);

/*
    ! Arrow Function
    * In ES6 there is a shorter anad clearner way to write the same code using arrow function
*/

const findSecondCourse = courses.find((course) => course.name === "b");

// console.log(findSecondCourse);

const sum = (a, b) => a + b;

// console.log(sum(1, 2));

function sumNumber(a, b) {
  return a + b;
}

// console.log(sumNumber(3, 9));

// ! Remove element From an array

// End
const lastElement = numbers.pop();
console.log("POP", numbers);

// First
numbers.shift();
console.log("Shift", numbers);

// Middle
numbers.splice(2, 2);
console.log(numbers);

/* 
 ! Empty an array
 * Solution 1 (Not Recommended)

const anotherNumbersArray = numbers;
numbers = [];
console.log(numbers);
console.log(anotherNumbersArray);

! Solution 2  (Not Recommended)
numbers.length = 0;
console.log(numbers);
 */

// numbers.splice(0, numbers.length);
// console.log(numbers);

while (numbers.length > 0) {
  numbers.pop();
}

console.log(numbers);
