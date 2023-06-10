
/*
    ! Global vs Local Scope
    * Scope Def => So, a scope of a variable or a constant determines where that variable or conatant is accessible, and when we declare a variable or constant with let or const their scope is limited to the block in which they are define.

*/

const color = 'red'
var age = 22


{
    const message = 'hi'
}
// console.log(message)

function start() {
    const message = 'hello'
    const color = 'blue'
    if (true) {
        const another = 'bye';
    }
    // console.log(another)
    console.log(color)
}

start()


function bye() {
    const message = 'bye'
    console.log(message)
    console.log(color)
}

bye()

function forStart() {
    for (var i = 0; i < 5; i++) {
        console.log(i)
    }
    console.log(i)
}
forStart()