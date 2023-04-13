import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { UserModel } from '../models/UserModel'

export class UserService {
    private readonly _saltRound = 12;
    private readonly _jwtSecret = 'mysercret'
    private static _user :UserModel
    register ( {email, password} : UserModel) {
            bcrypt.hash(password, this._saltRound)
            .then(hash => {
                return UserModel.create({email, password:hash})
            .then( u => u)
        })
    }
    login(user : UserModel) {
        let u : UserModel = UserModel.findByEmail(user.email)
        const {id, email} = u;
        return  { token : jwt.sign({id, email}, this._jwtSecret)}        
    }
    verifyToken(token:string) {
        return new Promise( (resolve, reject) => {
            jwt.verify(token, this._jwtSecret, (err, decoded:any) => {
                if(err) {
                    resolve(false);
                    return;
                }
                 let _user:UserModel =  UserModel.findByEmail(decoded['email']);
                 if(_user) {
                    resolve(true);
                 }
                return;
            })
        }) as Promise<boolean>;
    }

    getUserById(id:number): UserModel {
        return UserModel.findById(id);
    }
}
export default new UserService();