/* 
    ! Exercie 1
    ? Write a function called arrayFromRange
        * This function should takes two parameters min and max.
        * When we run this function we get an array and in this array we have numbers from min to max. 
        * e.g arrayFromRange(1,6)
*/

/*
    ! Exercise 2
    * Write a function like the includes method so imagine we dont have this method in array. and your job is to implement this method yourself.
    * e.g includes(numbers, 1)
*/

/*
    ! Exercise 3
    * Write a function called except(numbers, [1,2]) It takes 2 arrays and the other array we pass is, we can add the values we want to be excluded from the original array.
    * So this function returns a new array without the vakues that we pass in the second array
*/

/*
    ! Exercise 4
    * So this function called "move" and we used that to move an element in an array
    * move(array, index, offset)
    * 
    * 1. first clone the array
    * 2. Use splice method to get the element
    * 3. use splice method to add it an array
*/


function move(array, index, offset) {
    const output = [...array];
    const element = output.splice(index, 1)[0];
    console.log('element >>>>', element)
    output.splice(index + offset, 0, element);

    return output
}

const numbers = [1, 2, 3, 4]
console.log(move(numbers, 0, 1))