

function sum(discount, ...price) {
    const total = price.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(sum(0.1, 20, 30, 1))

// ! Default Parameter

function interest(principal, rate = 3.5, years = 5) {
    // rate = rate || 3.5;
    // years = years || 5
    return principal * rate / 100 * years;
}


// console.log(interest(10000, undefined, 5))
console.log(interest(10000))

// ! Setters and Getters