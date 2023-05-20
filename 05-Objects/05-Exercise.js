/* 
    ! Exercise 1
    ? Create an address object with thre properties, street, city and zipCode.
    ? Then Create a function call showAddress that takes an address object and displays all the propertiesof this object along with the values?
*/

/* 
    ! Exercise 2
    ? Write two different functions one is a factory function and the other is a constructor function to initialize an address object?
*/

/*
    ! Exercise 3
    * Now you have to create a constructor function that you will create in exercise 2.
    ? NOw you have to create 2 functions.
    ? 1. One is called areEqual and pass two address objects. e.g address1, address2.
        * and check to see if these two objects are equal or not?
    ! NOTE: Objects are refernce types so we can have two objects with exact same properties., but these abjects are in different memory locations
    * example: 
        * const address1 = showAddres('a','b',1)
        * const address2 = showAddres('a','b',1)
        * areEqual(address1, address2)
    
    ? 2. Now the other function I want you to write is called areSame, e.g areSame(address1, address2) amd this function tells us if address1 and address2 are pointed to the exact same object, In other words they are referencing the same object
*/

/* 
    ! Exercise 4
    ? Create a constructor function to create a post object
*/

const post = {
  title: "a",
  body: "x",
  views: 10,
  comments: [
    {
      authors: "a",
      body: "x",
    },
    {
      authors: "b",
      body: "c",
    },
  ],
  isLive: true,
};
