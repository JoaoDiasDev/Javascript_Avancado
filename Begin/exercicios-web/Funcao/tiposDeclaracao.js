console.log(soma(3, 4)); // Somente funciona desta forma numa function declaration

// function declartion
function soma(x, y) {
    return x + y;
}

// function expression
const sub = function(x, y) {
    return x - y;
};

console.log(sub(3, 4));

//named function expression
const mult = function mult(x, y) {
    return x * y;
};

console.log(mult(3, 4));