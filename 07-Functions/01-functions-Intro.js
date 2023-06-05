/* 
    ! Function Declarations v/s Function Expression

*/

// * 

//  Function Declarations

function walk() {
    console.log('Walk');
}
walk()
// console.log(x)
// let x = 1

// Anonymous Function Expression
const run = function () {
    console.log('Run')
};
run();


// Named Function Expression
const runs = function walks() {
    console.log('RUNS')
}

runs()

let move = run

move()


// ! Hoisting
// Hoisting is the process of moving function declarations to the top of the file, and its done automatically by the JS Engine that is executing this code. That's the reason we can call functions that are defined using the "function declaration syntax" before their definition


// ! Arguments
// JS Is a a dynamic type language, so we can declare a variable and set it to a number and then change its type and set to a string


let x = 1;
x = 'a'
// but we have the same concept in the arguments of a function 

// function sum() {
//     // console.log(arguments)
//     let total = 0
//     for (let value of arguments)
//         total += value
//     return total
// }


function sum(a, b, ...args) {
    console.log(args)
    let total = 0
    for (let value of args)
        total += value
    return total
}

console.log(sum(1, 2, 3, 4, 5))


function sumReduce(args) {
    args.reduce()
}

sumReduce([1, 2, 3, 4])