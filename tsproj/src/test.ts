function memoize<T extends string|number, R>(fn:(arg:T) => R) {

     var cache = {} as {[key in T]: R};
    
     return function(arg: T) {
    
     if(!cache[arg]) {
    
        cache[arg] = fn(arg);
    
     }
    
     return cache[arg];
    
     }
    
    }