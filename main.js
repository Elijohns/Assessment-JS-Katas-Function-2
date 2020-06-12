// 1. Add

function add(a, b) {
    return a + b}



// 2. Multiply

function multiply(a, b) {
    let result = 0
    for (let index = 0; index < b; index++) {
    result = add(result, a)   
    }
    return result
}



// 3. Power/Exponentiatiom


function power(a, b) {
    let result = 1
    for (let index = 0; index < b; index++) {
        result = multiply(result, a)
    }
    return result
}



// 4. Factorial


function factorial(a) {
    let result = 1
    for (let index = 1; index <= a; index++) {
        result = multiply (result, index)
    }
    return result
}
