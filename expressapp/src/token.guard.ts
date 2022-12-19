import { Request, Response, NextFunction } from "express";
import UserService from "./service/UserService";

export function tokenGuard(req:Request, res:Response, next:NextFunction) {
    const token = req.headers.authorization?.split(' ')[1] as string;
    const hasAccess = UserService.verifyToken(token);

    hasAccess.then( valid => {
        if(valid) {
            next();
        } else {
            return res.status(403).send({message: "No access!!!"});
        }
    })

}