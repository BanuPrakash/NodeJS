"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("./lib");
let products = [
    { "id": 1, "name": "iPhone 14", "price": 120000.00, "category": "mobile" },
    { "id": 2, "name": "Samsung ", "price": 240000.00, "category": "tv" },
    { "id": 3, "name": "Redmi", "price": 8900.00, "category": "mobile" },
    { "id": 4, "name": "Wacom", "price": 9811.00, "category": "computer" }
];
let mobiles = (0, lib_1.filter)(products, p => p.category === 'mobile');
(0, lib_1.forEach)(mobiles, console.log);
let data = [6, 5, 1, 3, 8];
let result = (0, lib_1.filter)(data, e => e % 2 === 0);
(0, lib_1.forEach)(result, console.log);
