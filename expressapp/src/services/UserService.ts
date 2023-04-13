import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import UserModel, { User } from "../model/User";

class UserService {
    private readonly __saltRound = 12;
    private readonly __jwtSecret = "mytopsecretvalue123data";

    register(user:Partial<User>){
        bcrypt.hash( (user as User).password, this.__saltRound).then(async hash => {
            user.password = hash;
            await UserModel.create(user); // insert into mongodb
        });
    }

    async login(user:Partial<User>) {
        let u = await  UserModel.findOne({email:user.email});
        if( u !== null && bcrypt.compareSync((user as User).password, u.password)) {
            return {
                token: jwt.sign({user:u.email}, this.__jwtSecret, {
                    issuer: "http://auth.adobe.com",
                     expiresIn: Date.now() + 60*60*60*24
                })
            }
        } else {
            return {
                token:""
            }
        }
    }

    verifyToken(token:string) {
        return new Promise( (resolve,reject) => {
            jwt.verify(token, this.__jwtSecret, (err, decoded:any) => {
                if(err) {
                    resolve(false);
                    return;
                } else {
                    console.log(decoded);
                    resolve(true);
                }
            })
        });
    }
}

export default new UserService();