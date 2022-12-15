import Person  from './Person';
import {random} from 'lodash';
import Product from './Product';
import {forEach, filter} from './lib';

import User from './User';
let u:User = new User("George", "t1");
// @ts-ignore
if(u["errors"]) {
    // @ts-ignore
    console.log(u["errors"]);
} else  {
    console.log(u.name);
}


let products:Product[] = [
    {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
    {"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
    {"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
    {"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
    {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];
    
let data:number[] = [5,1,12,31,9,46];

let evens = filter(data, e => e % 2 === 0);
let mobiles = filter(products, e => e.category === 'mobile');

forEach(evens, console.log);
forEach(mobiles, console.log);

console.log(random(1, 100));


let p1:Person = new Person("Jack", 34);
let p2:Person = new Person("Jill", 30);
//@ts-ignore
console.log(p1.getName(), p1.getAge(), p1["country"]);
//@ts-ignore
console.log(p2.getName(), p2.getAge(), p2["country"]);

p1.print();
p2.print();