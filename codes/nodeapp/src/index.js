let {random} = require('lodash');// installed module
let {add, forEach, filter} = require('./lib'); // project specific module

console.log(random(1, 100));

console.log(add(4,5));


let products = [
    {"id": 1, "name": "iPhone 14", "price": 120000.00, "category" : "mobile"},
    {"id": 2, "name": "Samsung ", "price": 240000.00, "category" : "tv"},
    {"id": 3, "name": "Redmi", "price": 8900.00, "category" : "mobile"},
     {"id": 4, "name": "Wacom", "price": 9811.00, "category" : "computer"}
];

let mobiles = filter(products, p => p.category === 'mobile');

forEach(mobiles, console.log);