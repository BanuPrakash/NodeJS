"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Min(limit) {
    return function (target, propertyKey) {
        let x;
        const getter = function () {
            return x;
        };
        const setter = function (newVal) {
            if (newVal.length < limit) {
                Object.defineProperty(target, "errors", {
                    value: propertyKey + " should be minimum of " + limit
                });
            }
            else {
                x = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
exports.default = Min;
