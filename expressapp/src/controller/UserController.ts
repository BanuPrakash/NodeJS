import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
    async register(req:Request, res: Response) {
        const user = await UserService.register(req.body);
        res.status(201).send(user);
    }

    async login(req:Request, res: Response) {
        const token = await UserService.login(req.body);
        res.status(200).send(token);
    }
}

export default new UserController();