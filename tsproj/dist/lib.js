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
    for (var i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}
exports.forEach = forEach;
//let mobiles = filter(products, p => p.category === 'mobile');
// HOF
function filter(elems, predicate) {
    var result = [];
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
    var result = [];
    forEach(elems, function (e) {
        result.push(transformFn(e));
    });
    return result;
}
exports.map = map;
function memoize(fn) {
    var cache = {};
    return function (arg) {
        // @ts-ignore
        if (!cache[arg]) {
            // @ts-ignore
            cache[arg] = fn(arg);
        }
        // @ts-ignore
        return cache[arg];
    };
}
exports.default = memoize;
