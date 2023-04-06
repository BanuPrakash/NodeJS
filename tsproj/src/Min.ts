// decorator factory
export default function Min(limit:number) {
    return function(target:any, propertyKey:string){
        let x: number;
        const setter = function(newVal:number) {
            if(newVal < limit) {
                Object.defineProperty(target, "error", {
                    value: propertyKey + " should be minimum of " + limit + " you entered " + newVal
                })
            } else {
                x = newVal;
            }
        }

        const getter = function() {
            return x;
        }

        Object.defineProperty(target, propertyKey, {
            set:setter,
            get:getter
        })
    }
}
