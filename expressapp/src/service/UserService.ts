import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import UserModel, { User } from "../model/User";

class UserService {
    private readonly __saltRound = 12;
    private readonly __jwtSecret = "topsecret123";

    users:Partial<User>[] = [];

    register(user:Partial<User>) {
        // bcrypt.hash(user.password, this.__saltRound)
        // UserModel.create(user, (err, resp) => {
        //     return resp;
        // });
        this.users.push(user);
    }

    login(user:Partial<User>) {
        // let u = UserModel.findOne({email:user.email, password:user.password});
        // if(u !== null) {
        //     return {
        //         token: jwt.sign({user:u.email}, this.__jwtSecret)
        //     }
        // }

        let u = this.users.find(u => u.email == user.email);
        if(u ! == null || u !== undefined) {
            return {
                token: jwt.sign({email:u!.email}, this.__jwtSecret, {
                    expiresIn: new Date().getMilliseconds() + 10000* 30,
                    issuer: "Adobe"
                })
            }
        }
    }
    
    verifyToken(token:string) {
        return new Promise( (resolve, reject) => {
            jwt.verify(token, this.__jwtSecret, (err, decoded:any) =>{
                if(err) {
                    resolve(false);
                    return;
                }
                console.log(decoded);
                resolve(true);
            });
        }) as Promise<boolean>;
    }

}

export default new UserService();