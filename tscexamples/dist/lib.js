"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = exports.forEach = void 0;
function forEach(elems, action) {
    let i = 0;
    for (i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}
exports.forEach = forEach;
// HOF
function filter(elems, predicate) {
    let result = [];
    forEach(elems, e => {
        if (predicate(e)) {
            result.push(e);
        }
    });
    return result;
}
exports.filter = filter;
