
export class UserModel {
    public id?:number;
    public email:string;
    public password:string;
    public static users:UserModel[] = [];
    constructor() {
        this.id = 0;
        this.email = "";
        this.password  ="";
    }

    static findById(id:number) : UserModel {
        return this.users.filter(user => user.id == id) [0];
    }

    static findByEmail(email:string) : UserModel {
        return this.users.filter(user => user.email === email) [0];
    }

    static create(user:UserModel) : Promise<UserModel> {
        UserModel.users.push(user);
        return new Promise( (resolve, reject) => resolve(user));
    }
}