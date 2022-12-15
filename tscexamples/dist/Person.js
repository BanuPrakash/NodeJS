"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Nationality_1 = __importDefault(require("./Nationality"));
// implements for Realization relationhip
let Person = class Person {
    constructor(name = "", age = 0) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(this.name, this.age);
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    setAge(a) {
        this.age = a;
    }
};
Person = __decorate([
    Nationality_1.default({
        name: "India"
    })
], Person);
exports.default = Person;
