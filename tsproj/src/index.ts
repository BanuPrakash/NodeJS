import {filter, map, forEach, memoize} from './lib';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}
let products:Product[] = [
    {"id": 1, "name": "iPhone 14", "price": 120000.00, "category" : "mobile"},
    {"id": 2, "name": "Samsung ", "price": 240000.00, "category" : "tv"},
    {"id": 3, "name": "Redmi", "price": 8900.00, "category" : "mobile"},
     {"id": 4, "name": "Wacom", "price": 9811.00, "category" : "computer"}
];

// products.filter(p => p.category === 'mobile');

let mobiles:Product[] = filter(products, p => p.category === 'mobile');

forEach(mobiles, console.log);

let data:number[] = [6,5,1,3,8];

let result:number[] = filter(data, e => e % 2 === 0);

forEach(result, console.log);

console.log("**********");

function fibanocci(no:number):number {
    return (no == 0 || no == 1) ? no : fibanocci(no - 1) + fibanocci(no - 2);
}

let memFib = memoize(fibanocci);

console.time("first");
    console.log(memFib(34));
console.timeEnd("first");

console.time("second");
    console.log(memFib(34));
console.timeEnd("second");