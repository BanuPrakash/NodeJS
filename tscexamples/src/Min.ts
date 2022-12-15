export default function Min(limit:number) {
    return function(target:any, propertyKey:string) {
        let x:string;

        const getter = function() {
            return x;
        }

        const setter = function(newVal:string) {
            if(newVal.length < limit) {
                Object.defineProperty(target, "errors", {
                    value: propertyKey + " should be minimum of " + limit 
                })
            }
             else {
                x = newVal;
             }
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        })
    }
}