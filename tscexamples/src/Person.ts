import Nationality from "./Nationality";
import Printable from "./Printable";
 
// implements for Realization relationhip

@Nationality({
   name:"India"
})
export default class Person implements Printable {
     constructor(private name:string = "", private age: number = 0) {
     }

    print(): void {
       console.log(this.name, this.age);
    }

     public getName():string {
        return this.name;
     }

     public getAge(): number {
        return this.age;
     }

     public setAge(a:number): void {
        this.age = a;
     }
}
