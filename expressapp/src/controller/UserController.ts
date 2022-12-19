import {Request, Response} from 'express'
import UserService  from '../service/UserService'
class UserController {
    async register( req:Request, res:Response) {
        const user = await UserService.register(req.body);
        res.status(201).send(user);
    }

    async login(req:Request, res:Response) {
        const token = UserService.login(req.body);
        return res.status(200).send(token);
    }
}

export default new UserController();