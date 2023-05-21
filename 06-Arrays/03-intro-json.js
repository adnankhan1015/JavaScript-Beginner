// {
//   "name": "John",
//   "age": 30,
//   "city": "New York"
// }

const obj = {
  name: "John",
  age: 30,
  city: "New York",
};

obj.city = "New York";

// Turn object into JSON string
const str = JSON.stringify(obj);
console.log(str);
console.log(str.name);

// Turn JSON string into object
const obj2 = JSON.parse(str);
console.log(obj2); // {name: "John", age: 30, city: "New York"}
