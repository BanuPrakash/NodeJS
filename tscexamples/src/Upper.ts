export default function Upper() {
    return function(target:any, propertyKey:string) {
        let privateKey = Symbol();

        function setter(this:any, data:string) {
            console.log("called setter", data);
            this[privateKey] = data.toUpperCase();
        }

        function getter(this:any) {
            console.log("called getter", this)
            return this[privateKey];
        }

        Object.defineProperty(target, propertyKey, {
            get:getter,
            set:setter
        });
    }
}