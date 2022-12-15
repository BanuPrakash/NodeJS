"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Upper() {
    return function (target, propertyKey) {
        let privateKey = Symbol();
        function setter(data) {
            console.log("called setter", data);
            this[privateKey] = data.toUpperCase();
        }
        function getter() {
            console.log("called getter", this);
            return this[privateKey];
        }
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
exports.default = Upper;
