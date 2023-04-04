
function add(x, y) {
    return x + y;
}
// HOF
function forEach(elems, action){
    for(let i = 0; i < elems.length; i ++) {
        action(elems[i]);
    }
}
// forEach([4,22,55,1], console.log);
// forEach([4,22,55,1], alert);

// HOF
function filter(elems, predicate) {
    let result = [];
    forEach(elems, function(e) {
        if(predicate(e)) {
            result.push(e);
        }
    });

    return result;
}

// HOF
function map(elems, transformFn) {
    // TODO
}

module.exports = {add, filter, forEach, map};