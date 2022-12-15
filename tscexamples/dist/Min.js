"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Min(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length < limit) {
                Object.defineProperty(target, "errors", {
                    value: "Email should be minimum of " + limit
                });
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
exports.default = Min;
