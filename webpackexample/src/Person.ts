export default class Person{
    constructor(private name:string, private age:number){}

    public getName() {
        return this.name;
    }

    public getAge() {
        return this.age;
    }

    get data() {
        return this.name + ": " + this.age;
    }
}