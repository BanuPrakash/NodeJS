import {random} from 'lodash';

import Student from './Student';

let s:Student = new Student("Ashok", 19);
//@ts-ignore
if(!s["error"]) {
    console.log(s.getName(), s.getAge());
} else {
    //@ts-ignore
    console.log(s["error"])
}

console.time("a");
    console.log(s.fibanocci(34));
console.timeEnd("a");


console.time("b");
    console.log(s.fibanocci(34));
console.timeEnd("b");
// import memoize, {filter, map, forEach} from './lib';

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   category: string;
// }
// let products:Product[] = [
//     {"id": 1, "name": "iPhone 14", "price": 120000.00, "category" : "mobile"},
//     {"id": 2, "name": "Samsung ", "price": 240000.00, "category" : "tv"},
//     {"id": 3, "name": "Redmi", "price": 8900.00, "category" : "mobile"},
//      {"id": 4, "name": "Wacom", "price": 9811.00, "category" : "computer"}
// ];

// // products.filter(p => p.category === 'mobile');

// let mobiles:Product[] = filter(products, p => p.category === 'mobile');

// forEach(mobiles, console.log);

// let data:number[] = [6,5,1,3,8];

// let result:number[] = filter(data, e => e % 2 === 0);

// forEach(result, console.log);

// console.log("**********");

// function fibanocci(no:number):number {
//     return (no == 0 || no == 1) ? no : fibanocci(no - 1) + fibanocci(no - 2);
// }

// let memFib = memoize(fibanocci);

// console.time("first");
//     console.log(memFib(34));
// console.timeEnd("first");

// console.time("second");
//     console.log(memFib(34));
// console.timeEnd("second");

// console.log(random(1,100));

// let p1:Student = new Student("Raj", 15);
// console.log(p1.getName(), p1.getAge());

// function doTask() {
//     return {
//         "userId": 1,
//         "id": 3,
//         "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//         "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//         }
// }

// type T = ReturnType<typeof doTask>;

// let retVal:T = doTask();