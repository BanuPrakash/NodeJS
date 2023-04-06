
function add(x:number, y:number):number {
    return x + y;
}
// HOF
// forEach([3,1,341,1], console.log);
// forEach(["a","g","h"], alert);
function forEach<T>(elems:T[], action: (elem:T) => void){
    for(let i = 0; i < elems.length; i ++) {
        action(elems[i]);
    }
}

//let mobiles = filter(products, p => p.category === 'mobile');
// HOF
function filter<T>(elems:T[], predicate:(elem:T) => boolean): T[] {
    let result:T[] = [];
    forEach(elems, function(e) {
        if(predicate(e)) {
            result.push(e);
        }
    });
    return result;
}

// HOF
function map<T,R>(elems:T[], transformFn:(elem:T) => R):R[] {
    let result:R[] = [];
    forEach(elems, e => {
        result.push(transformFn(e));
    });
    return result;
}

export default function memoize<T extends number | string,R>(fn:(arg:T) => R) {
    var cache:{T?:R} ={};
    return function(arg:T) {
        // @ts-ignore
        if(!cache[arg]) {
            // @ts-ignore
            cache[arg] = fn(arg);
        }
        // @ts-ignore
        return cache[arg];
    }
}
export {add, forEach, filter, map};