export default function Nationality(config:any) { // decorator factory method
    return function(constructor:Function) { // returns decorator
        Object.defineProperty(constructor.prototype, "country", {value: config.name})
    }
}