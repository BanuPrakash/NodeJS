import { Request, Response } from 'express';

import userService from '../../service/user.service';
 

class UserController {
    async register(req:Request, res: Response) {
        const user = await userService.register(req.body);
        res.status(201).send(user);
    }

    async login(req:Request, res:Response) {
        const token  = userService.login(req.body);
        return res.json(token);
    }
}

export default new UserController();