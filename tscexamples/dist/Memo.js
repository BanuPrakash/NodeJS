"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Memo(target, methodName, descriptor) {
    let fn = descriptor.value;
    let cache = {};
    // proxy
    descriptor.value = function (...args) {
        let key = args.join("_"); // 4_5 for add(4,5)
        if (!cache[key]) {
            cache[key] = fn.apply(target, args);
        }
        else {
            console.log("Cache hit!!!");
        }
        return cache[key];
    };
    return descriptor;
}
exports.default = Memo;
