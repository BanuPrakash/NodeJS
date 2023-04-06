"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getAge = function () {
        return this.age;
    };
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    return Student;
}());
exports.default = Student;
