"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
const lodash_1 = require("lodash");
const lib_1 = require("./lib");
const User_1 = __importDefault(require("./User"));
let u = new User_1.default("George");
console.log(u.name);
let products = [
    { "id": 1, "name": "iPhone", "price": 124447.44, "category": "mobile" },
    { "id": 2, "name": "Onida", "price": 4444.44, "category": "tv" },
    { "id": 3, "name": "OnePlus 6", "price": 98444.44, "category": "mobile" },
    { "id": 4, "name": "HDMI connector", "price": 2444.00, "category": "computer" },
    { "id": 5, "name": "Samsung", "price": 68000.00, "category": "tv" }
];
let data = [5, 1, 12, 31, 9, 46];
let evens = lib_1.filter(data, e => e % 2 === 0);
let mobiles = lib_1.filter(products, e => e.category === 'mobile');
lib_1.forEach(evens, console.log);
lib_1.forEach(mobiles, console.log);
console.log(lodash_1.random(1, 100));
let p1 = new Person_1.default("Jack", 34);
let p2 = new Person_1.default("Jill", 30);
//@ts-ignore
console.log(p1.getName(), p1.getAge(), p1["country"]);
//@ts-ignore
console.log(p2.getName(), p2.getAge(), p2["country"]);
p1.print();
p2.print();
