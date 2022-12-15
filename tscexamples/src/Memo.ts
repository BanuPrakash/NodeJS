export default function Memo(target:any, methodName:string, descriptor:PropertyDescriptor) {
    let fn:Function = descriptor.value;
    let cache:any = {};
    // proxy
    descriptor.value = function(...args:any[]) {
        let key = args.join("_"); // 4_5 for add(4,5)
        if(!cache[key]) {
            cache[key] = fn.apply(target, args);
        } else {
            console.log("Cache hit!!!");
        }

        return cache[key];
    }   
    return descriptor;
}