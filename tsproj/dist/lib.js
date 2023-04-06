"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = exports.filter = exports.forEach = exports.add = void 0;
function add(x, y) {
    return x + y;
}
exports.add = add;
// HOF
// forEach([3,1,341,1], console.log);
// forEach(["a","g","h"], alert);
function forEach(elems, action) {
    for (let i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}
exports.forEach = forEach;
//let mobiles = filter(products, p => p.category === 'mobile');
// HOF
function filter(elems, predicate) {
    let result = [];
    forEach(elems, function (e) {
        if (predicate(e)) {
            result.push(e);
        }
    });
    return result;
}
exports.filter = filter;
// HOF
function map(elems, transformFn) {
    let result = [];
    forEach(elems, e => {
        result.push(transformFn(e));
    });
    return result;
}
exports.map = map;
