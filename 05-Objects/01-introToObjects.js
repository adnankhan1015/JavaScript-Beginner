/*
    ! Objects
    * Objects are collections of key value pairs.
    * So if you have properties that are highly related we want to encapsulate them inside of an object.
    * 
    ! Example:
    * we are building an app for drawing different kinds of shapes like circles, rectangles, squares, etc
    * So we could declare multiple variables around circle for example radius we set that to 1
    * We are defining multiple variables but all these variables are highly related they represent the circle.
        * let radius = 1;
        * let x = 1;
        * let y = 1;
    * A better approach is to put these variables inside of an object 
    * We can put these variables inside of an object now we can send that object anywhere in our program
    * we can pass that to any function and all these variables would be available in that object.
*/

let radius = 1;
let x = 1;
let y = 1;

// ! Define object

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("Draw circle");
  },
};

// circle.draw();

/*
    ! Object Oriented Style Programming (OOP)
    * Where we see a program is a collection of objects that talk to each other to perform some functionality.
    * We have a circle object and this object has a few properties and a function.
    * If a function is part of an object, we call the function a method.
    * So here more accurately instead of saying we are calling the draw function of the circle object. e.g circle.draw() We say we are calling the draw method of the circle object
*/

/*
    ! 1. Factory Functions
    * 
*/

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("Draw circle");
    },
  };
}

const circle1 = createCircle(12);
// circle1.draw();
// console.log(circle1.radius);

/* 
    ! 1. Camel Notation
    * first alphabet of first word will be small e.g oneTwoThree
    ! 2. Pascal Notation
    * first alphabet of first word will be in capital. e.g: OneTwoThree

    ! Constructor Functions
    * There is another way to create an object is the constructor function.
    * In object instead of returning ab object we are going to use the "this" keyword, to set the properties of this object.
    ? What is "this" keyword?
    ! This is basically a reference to the object that is executing this piece of code.
    * Imagine we have a new empty object in memory now we are going to use the "this" keyword to reference that object. then use the dot notation to set varius properties on that object so we can set the "radius" property to this radius argument.
    * "this" keyword reference the window object
*/

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw circle");
  };
}

const constructorCircle = new Circle(3);
console.log(constructorCircle);

/* 
    ! This new keyword in the constructor function do 3 things
    * 1. It creates an empty object e.g {}
    * 2. "new" will set "this" keyword to point to that object.
    * 3. Finally, return that object from this function.
        * So here we don't have an explicit return statement.
        * "return", This will happen automatically when we use the new operator
*/
