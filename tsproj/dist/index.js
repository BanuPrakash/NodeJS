"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var Student_1 = __importDefault(require("./Student"));
var lib_1 = __importStar(require("./lib"));
var products = [
    { "id": 1, "name": "iPhone 14", "price": 120000.00, "category": "mobile" },
    { "id": 2, "name": "Samsung ", "price": 240000.00, "category": "tv" },
    { "id": 3, "name": "Redmi", "price": 8900.00, "category": "mobile" },
    { "id": 4, "name": "Wacom", "price": 9811.00, "category": "computer" }
];
// products.filter(p => p.category === 'mobile');
var mobiles = (0, lib_1.filter)(products, function (p) { return p.category === 'mobile'; });
(0, lib_1.forEach)(mobiles, console.log);
var data = [6, 5, 1, 3, 8];
var result = (0, lib_1.filter)(data, function (e) { return e % 2 === 0; });
(0, lib_1.forEach)(result, console.log);
console.log("**********");
function fibanocci(no) {
    return (no == 0 || no == 1) ? no : fibanocci(no - 1) + fibanocci(no - 2);
}
var memFib = (0, lib_1.default)(fibanocci);
console.time("first");
console.log(memFib(34));
console.timeEnd("first");
console.time("second");
console.log(memFib(34));
console.timeEnd("second");
console.log((0, lodash_1.random)(1, 100));
var p1 = new Student_1.default("Raj", 15);
console.log(p1.getName(), p1.getAge());
