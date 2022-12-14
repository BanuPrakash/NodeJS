interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
  }

  
let products:Product[] = [
    {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
    {"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
    {"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
    {"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
    {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];
    
let data:number[] = [5,1,12,31,9,46];

// HOF
function forEach<T>(elems:T[], action:(elem:T) => void):void {
	let i: number = 0;
	for(i = 0; i < elems.length; i++) {
		action(elems[i]);
	}
}

// HOF
function filter<T>(elems:T[], predicate: (elem:T) => boolean ) : T[] {
    let result:T[] = [];
    forEach(elems, e => {
        if(predicate(e)) {
            result.push(e);
        }
    });
    return result;
}

let evens = filter(data, e => e % 2 === 0);
let mobiles = filter(products, e => e.category === 'mobile');

forEach(evens, console.log);
forEach(mobiles, console.log);