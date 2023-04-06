import Course from "./Course";
import Memo from "./Memo";
import Min from "./Min";

@Course({
    name:'NodeTS'
})
export default class Student {
    name:string;
    @Min(18)
    age:number;
    constructor(name:string,  age:number) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge () {
        return this.age;
    }
    setName(name:string) {
        this.name = name;
    }

    @Memo
    fibanocci(no:number):number {
            return (no == 0 || no == 1) ? no : this.fibanocci(no - 1) + this.fibanocci(no - 2);
    }

    @Memo
    add(x:number, y:number):number {
        return x + y;
    }
}