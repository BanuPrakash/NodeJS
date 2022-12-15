import Upper from "./Upper";

export default class User {
    @Upper()
    public name:string;
    constructor(name:string) {
        this.name = name;
    }
}