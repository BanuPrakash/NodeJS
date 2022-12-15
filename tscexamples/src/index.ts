import {random} from 'lodash';
import Product from './Product';
import {forEach, filter} from './lib';

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

