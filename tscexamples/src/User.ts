
import Min from "./Min";
import Upper from "./Upper";

export default class User {
    @Upper()
    public name:string;

    @Min(5)
    email:string;
    constructor(name:string, email:string) {
        this.name = name;
        this.email = email;
    }
}