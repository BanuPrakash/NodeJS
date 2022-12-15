"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Nationality(config) {
    return function (constructor) {
        Object.defineProperty(constructor.prototype, "country", { value: config.name });
    };
}
exports.default = Nationality;
