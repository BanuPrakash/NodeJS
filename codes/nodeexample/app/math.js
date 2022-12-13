function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

// private to math module
function multiply(x, y) {
    return x * y;
}


module.exports = {
    add,
    subtract
}