// ! Combining and Slicing Arrays

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined);

const sliced = combined.slice();
console.log(sliced);

const firstObj = [{ id: 1 }];
console.log(firstObj[0].id);
const combinedObj = firstObj.concat(second);
console.log(combinedObj);

// ! If the element are primitive they are copied by their value
// ! If they are reference types, they are copied by their reference

// ! The Spread Operaor

const spreadOpArray = [...first, "ds", ...second];
// console.log(spreadOpArray);

// ! Iterating an Array

const numbers = [1, 2, 3];

for (let number of numbers) {
  //   console.log(number);
}
// ! Foreach method

// numbers.forEach((number, index) => console.log(index, number));

// ! Joining Arrays
const joined = numbers.join(",");
console.log(joined);

// ! Split method => That's not part of an arrays but that is part of the string

const message = "this is my first element";
const parts = message.split(" ");
console.log(parts);

const combinedString = parts.join(" ");
console.log(combinedString);
